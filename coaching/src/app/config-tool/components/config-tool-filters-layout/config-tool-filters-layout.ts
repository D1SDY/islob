import { AsyncPipe }                                        from '@angular/common';
import { Component, inject, input, OnInit, output, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule }      from '@angular/forms';
import { MatAutocomplete, MatAutocompleteTrigger }          from '@angular/material/autocomplete';
import { MatButton }                                        from '@angular/material/button';
import { MatChip, MatChipSet }                              from '@angular/material/chips';
import { MatFormField, MatInput, MatLabel }                 from '@angular/material/input';
import { MatOption, MatSelect }                             from '@angular/material/select';
import {
  BodyPositionEnum,
  ExerciseTypeEnum,
  JointComplexityEnum,
  LoadTypeEnum,
  LocationEnum,
  MuscleGroupEnum,
  UniLateralTypeEnum
}                                                           from 'coaching-shared';
import { map, Observable, startWith, tap }                  from 'rxjs';
import { buildDropDownOptions }                             from '../../utilities/helpers/filters.helpers';
import { ConfigToolFilters }                                from '../../utilities/models/config-tool-filters';
import { ConfigToolTranslations }                           from '../../utilities/models/config-tool-translations';
import { TranslationService }                               from '../../utilities/services/translation.service';

@Component({
  selector: 'app-config-tool-filters-layout',
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    ReactiveFormsModule,
    MatSelect,
    MatOption,
    MatAutocompleteTrigger,
    MatAutocomplete,
    AsyncPipe,
    MatButton,
    MatChipSet,
    MatChip
  ],
  templateUrl: './config-tool-filters-layout.html',
  styleUrl: './config-tool-filters-layout.scss',
})
export class ConfigToolFiltersLayout implements OnInit {

  private readonly translations: ConfigToolTranslations = inject(TranslationService).translations();

  autoCompleteOptions = input.required<string[]>();

  filtersApplied = output<ConfigToolFilters>();

  activeFilters = signal<string[]>([]);

  filters = new FormGroup({
    search: new FormControl('', {nonNullable: true}),
    muscleGroup: new FormControl([], {nonNullable: true}),
    bodyPosition: new FormControl([], {nonNullable: true}),
    location: new FormControl([], {nonNullable: true}),
    unilateralType: new FormControl([], {nonNullable: true}),
    jointComplexity: new FormControl([], {nonNullable: true}),
    loadType: new FormControl([], {nonNullable: true}),
    exerciseType: new FormControl([], {nonNullable: true}),
  });
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.filters.controls.search.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
      tap(() => this.applyFilters()),
    );
    this.filters.valueChanges.subscribe(() => {
      this.applyFilters();
      this.extractChipsData(this.filters.getRawValue());
    });
  }

  resetFilters(): void {
    this.filters.reset();
  }


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.autoCompleteOptions().filter(option => option.toLowerCase().includes(filterValue));
  }

  protected applyFilters() {
    this.filtersApplied.emit(this.filters.getRawValue());
  }

  protected get locationOptions() {
    return buildDropDownOptions(this.translations, Object.keys(LocationEnum));
  }

  protected get exerciseTypeOptions() {
    return buildDropDownOptions(this.translations, Object.keys(ExerciseTypeEnum));
  }

  protected get loadTypeOptions() {
    return buildDropDownOptions(this.translations, Object.keys(LoadTypeEnum));
  }

  protected get muscleGroupOptions() {
    return buildDropDownOptions(this.translations, Object.keys(MuscleGroupEnum));
  }

  protected get bodyPositionsOptions() {
    return buildDropDownOptions(this.translations, Object.keys(BodyPositionEnum));
  }

  protected get unilateralTypeOptions() {
    return buildDropDownOptions(this.translations, Object.keys(UniLateralTypeEnum));
  }

  protected get jointComplexityOptions() {
    return buildDropDownOptions(this.translations, Object.keys(JointComplexityEnum));
  }

  private extractChipsData(filters: ConfigToolFilters) {
    const {search, ...chipsData} = filters;
    const chipsDataKeys = Object.values(chipsData).flat();
    this.activeFilters.set(chipsDataKeys.map(key => this.translations[key]));
  }

  protected onChipDoubleClick(label: string): void {
    const key = Object.keys(this.translations)
                      .find(k => this.translations[k] === label);

    if (!key) {
      return;
    }

    const arrayControls = Object.keys(this.filters.controls);

    arrayControls.forEach(controlName => {
      const control = this.filters.controls[controlName] as FormControl<string[]>;
      const current = control.value ?? [];
      const index = current.indexOf(key);

      if (index !== -1) {
        const updated = [...current];
        updated.splice(index, 1);
        control.setValue(updated);
      }
    });
  }
}

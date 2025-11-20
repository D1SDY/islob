import { AsyncPipe }                                      from '@angular/common';
import { Component, inject, input, OnInit, output }       from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule }    from '@angular/forms';
import { MatAutocomplete, MatAutocompleteTrigger }        from '@angular/material/autocomplete';
import { MatButton }                                      from '@angular/material/button';
import { MatFormField, MatInput, MatLabel }               from '@angular/material/input';
import { MatOption, MatSelect }                           from '@angular/material/select';
import { Equipment, ExerciseType, Location, MuscleGroup } from 'coaching-shared';
import { map, Observable, startWith }                     from 'rxjs';
import { buildDropDownOptions }                           from '../../utilities/helpers/filters.helpers';
import { ConfigToolFilters }                              from '../../utilities/models/config-tool-filters';
import { ConfigToolTranslations }                         from '../../utilities/models/config-tool-translations';
import { TranslationService }                             from '../../utilities/services/translation.service';

@Component({
  selector: 'app-config-tool-filters-layout',
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    ReactiveFormsModule,
    MatSelect,
    MatOption,
    MatButton,
    MatAutocompleteTrigger,
    MatAutocomplete,
    AsyncPipe
  ],
  templateUrl: './config-tool-filters-layout.html',
  styleUrl: './config-tool-filters-layout.scss',
})
export class ConfigToolFiltersLayout implements OnInit {

  private readonly translations: ConfigToolTranslations = inject(TranslationService).translations();

  autoCompleteOptions = input.required<string[]>();

  filtersApplied = output<ConfigToolFilters>();

  filters = new FormGroup({
    search: new FormControl('', {nonNullable: true}),
    equipment: new FormControl([], {nonNullable: true}),
    muscle: new FormControl([], {nonNullable: true}),
    location: new FormControl([], {nonNullable: true}),
    exerciseType: new FormControl([], {nonNullable: true}),
  });
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.filters.controls.search.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.autoCompleteOptions().filter(option => option.toLowerCase().includes(filterValue));
  }


  protected applyFilters() {
    this.filtersApplied.emit(this.filters.getRawValue());
  }

  protected get locationOptions() {
    return buildDropDownOptions(this.translations, Object.keys(Location));
  }

  protected get exerciseTypeOptions() {
    return buildDropDownOptions(this.translations, Object.keys(ExerciseType));
  }

  protected get equipmentOptions() {
    return buildDropDownOptions(this.translations, Object.keys(Equipment));
  }

  protected get muscleGroupOptions() {
    return buildDropDownOptions(this.translations, Object.keys(MuscleGroup))
  }
}

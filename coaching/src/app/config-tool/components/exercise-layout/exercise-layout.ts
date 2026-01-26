import { ChangeDetectorRef, Component, inject, input, OnInit, output }                from '@angular/core';
import { AbstractControl, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton }                                                                  from '@angular/material/button';
import { MatIcon }                                                                    from '@angular/material/icon';
import { MatTooltip }                                                                 from '@angular/material/tooltip';
import { DialogService, Exercise, WeightSystemEnum }                                  from 'coaching-shared';
import * as ExerciseValidators
                                                                                      from '../../utilities/helpers/exercise-validations';
import {
  getErrorText
}                                                                                     from '../../utilities/helpers/exercise-validations';
import {
  WeightSwitcher
}                                                                                     from '../weight-switcher/weight-switcher';

@Component({
  selector: 'app-exercise-layout',
  templateUrl: './exercise-layout.html',
  styleUrl: './exercise-layout.scss',
  imports: [
    MatButton,
    FormsModule,
    ReactiveFormsModule,
    MatIcon,
    WeightSwitcher,
    MatTooltip
  ]
})
export class ExerciseLayout implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly dialogService = inject(DialogService);

  exercise = input.required<Exercise>();

  deleteExerciseClicked = output<string>();

  private setsFormArray = this.fb.array([this.singleSet()]);

  ngOnInit(): void {
    this.setsFormArray.valueChanges.subscribe(() => this.cdr.markForCheck());
  }

  get sets() {
    return this.setsFormArray;
  }

  get availableForNewSet() {
    return this.setsFormArray.length < 5;
  }

  addSet() {
    this.setsFormArray.push(this.singleSet());
  }

  deleteSet(index: number) {
    this.setsFormArray.removeAt(index);
  }

  copySet(index: number) {
    if (this.availableForNewSet) {
      const {reps, rest, weight, effort} = this.setsFormArray.at(index).getRawValue();
      this.setsFormArray.push(this.singleSet(reps, rest, weight, effort));
    }
  }

  deleteExercise(): void {
    this.dialogService.openConfirmDialog({
      title: 'Delete Exercise',
      content: 'Are you sure you want to delete this exercise?'
    }).subscribe(confirmed => confirmed && this.deleteExerciseClicked.emit(this.exercise().name));
  }

  showError(control: AbstractControl | null): boolean {
    if (!control) return false;
    return control.invalid && (control.dirty || control.touched);
  }

  weightSystemChanged(weightSystem: WeightSystemEnum): void {
    this.exercise().weightSystem = weightSystem;
  }

  validationsInfoMessage(control: AbstractControl): string {
    return getErrorText(control);
  }

  private singleSet(reps = null, rest = null, weight = null, effort = null) {
    return this.fb.group({
        reps: [reps, [Validators.required, ExerciseValidators.noNegativeValidator, ExerciseValidators.noZeroValidator, ExerciseValidators.integerOnlyValidator]],
        rest: [rest, [Validators.required, ExerciseValidators.noNegativeValidator, ExerciseValidators.integerOnlyValidator,]],
        weight: [weight, [ExerciseValidators.noNegativeValidator, ExerciseValidators.maxTwoDecimalsValidator, ExerciseValidators.maxTwoDecimalsValidator]],
        effort: [effort, [Validators.required, ExerciseValidators.noNegativeValidator, ExerciseValidators.noZeroValidator, ExerciseValidators.lowerOrEqualToHundred]],
      },
      {updateOn: 'change'});
  }
}

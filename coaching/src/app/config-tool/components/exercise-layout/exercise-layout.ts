import { ChangeDetectorRef, Component, inject, input, OnInit, output }                from '@angular/core';
import { AbstractControl, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton }                                                                  from '@angular/material/button';
import { MatIcon }                                                                    from '@angular/material/icon';
import { Exercise }                                                                   from 'coaching-shared';
import * as ExerciseValidators
                                                                                      from '../../utilities/helpers/exercise-validations';

@Component({
  selector: 'app-exercise-layout',
  templateUrl: './exercise-layout.html',
  styleUrl: './exercise-layout.scss',
  imports: [
    MatButton,
    FormsModule,
    ReactiveFormsModule,
    MatIcon
  ]
})
export class ExerciseLayout implements OnInit {
  ngOnInit(): void {
    this.setsFormArray.valueChanges.subscribe(() => this.cdr.markForCheck());
  }
  private readonly fb = inject(FormBuilder);
  private readonly cdr = inject(ChangeDetectorRef);

  exercise = input.required<Exercise>();

  deleteExercise = output<string>();

  private setsFormArray = this.fb.array([this.singleSet()]);

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

  delete(): void {
    this.deleteExercise.emit(this.exercise().name);
  }

  showError(control: AbstractControl | null): boolean {
    if (!control) return false;
    return control.invalid && (control.dirty || control.touched);
  }

  private singleSet(reps = null, rest = null, weight = null, effort = null) {
    return this.fb.group({
        reps: [reps, [Validators.required, ExerciseValidators.noNegativeValidator, ExerciseValidators.maxTwoDecimalsValidator, ExerciseValidators.noZeroValidator, ExerciseValidators.integerOnlyValidator]],
        rest: [rest, [Validators.required, ExerciseValidators.noNegativeValidator, ExerciseValidators.maxTwoDecimalsValidator,]],
        weight: [weight, [Validators.required, ExerciseValidators.noNegativeValidator, ExerciseValidators.maxTwoDecimalsValidator,]],
        effort: [effort, [Validators.required, ExerciseValidators.noNegativeValidator, ExerciseValidators.maxTwoDecimalsValidator, , ExerciseValidators.noZeroValidator]],
      },
      {updateOn: 'change'});
  }
}

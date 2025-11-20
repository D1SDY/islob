import { Component, inject, input }                                  from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton }                                                 from '@angular/material/button';
import { MatIcon }                                                   from '@angular/material/icon';
import { Exercise }                                                  from 'coaching-shared';

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
export class ExerciseLayout {
  private readonly fb = inject(FormBuilder);

  exercise = input.required<Exercise>();

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

  private singleSet(reps = 0, rest = 0, weight = 0, effort = '') {
    return this.fb.group({
      reps: [reps, Validators.required],
      rest: [rest, Validators.required],
      weight: [weight, Validators.required],
      effort: [effort, Validators.required],
    });
  }
}

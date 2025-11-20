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
  exercise = input.required<Exercise>();
  private readonly fb = inject(FormBuilder);
  setsFormArray = this.fb.array([this.singleSet()]);

  get sets() {
    return this.setsFormArray;
  }

  get setsValues() {
    return this.sets.value;
  }


  addSet() {
    if (this.setsFormArray.length < 5) {
      this.setsFormArray.push(this.singleSet());
    }
    console.log(this.sets);
  }

  private singleSet() {
    return this.fb.group({
      reps: [0, Validators.required],
      rest: [0, Validators.required],
      weight: [0, Validators.required],
      effort: ["", Validators.required],
    });
  }
}

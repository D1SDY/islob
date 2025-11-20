import { CdkDrag, CdkDragDrop, CdkDropList, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, input }                                                  from '@angular/core';
import { MatIcon }                                                  from '@angular/material/icon';
import { Exercise }                                                 from 'coaching-shared';
import { ExcerciseContainer }                                       from '../excercise-container/excercise-container';
import { ExerciseLayout }                                           from '../exercise-layout/exercise-layout';

@Component({
  selector: 'app-workout-layout',
  imports: [
    CdkDropList,
    ExcerciseContainer,
    MatIcon,
    ExerciseLayout,
    CdkDrag
  ],
  templateUrl: './workout-layout.html',
  styleUrl: './workout-layout.scss',
})
export class WorkoutLayout {

  connectedTo = input.required<string[]>();
  workoutExercises = input.required<Exercise[]>();

  drop(event: CdkDragDrop<Exercise[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}

import { CdkDrag, CdkDragDrop, CdkDropList, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, input, model, output }         from '@angular/core';
import { MatButton }                               from '@angular/material/button';
import { MatIcon }                                 from '@angular/material/icon';
import { MatTab, MatTabGroup }                     from '@angular/material/tabs';
import { Exercise, EXERCISE_LIMIT, WORKOUT_LIMIT } from 'coaching-shared';
import {
  ExcerciseContainer
}                                                  from '../excercise-container/excercise-container';
import { ExerciseLayout }                          from '../exercise-layout/exercise-layout';

@Component({
  selector: 'app-workout-layout',
  imports: [
    CdkDropList,
    ExcerciseContainer,
    MatIcon,
    ExerciseLayout,
    CdkDrag,
    MatTabGroup,
    MatTab,
    MatButton
  ],
  templateUrl: './workout-layout.html',
  styleUrl: './workout-layout.scss',
})
export class WorkoutLayout {

  connectedTo = input.required<string[]>();
  workouts = input.required<Exercise[][]>();

  selectedTab = model(0);

  workoutAdded = output();
  workoutDeleted = output<number>();


  workoutLabel(index: number): string {
    return index === 0 ? 'Mobility' : `${index} Workout`;
  }

  drop(event: CdkDragDrop<Exercise[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else if (this.workouts()[this.selectedTab()].length < EXERCISE_LIMIT) {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

    }
  }

  addWorkout(): void {
    this.selectedTab.set(this.workouts().length);
    this.workoutAdded.emit();
  }

  deleteWorkout(index: number): void {
    this.workoutDeleted.emit(index);
    this.selectedTab.set(index);
  }

  isWorkoutLimit(): boolean {
    return this.workouts().length === WORKOUT_LIMIT + 1;
  }
}

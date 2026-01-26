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

  exerciseAdded = output<Exercise>();
  exerciseDeleted = output<string>();


  workoutLabel(index: number): string {
    return index === 0 ? 'Mobility' : `${index} Workout`;
  }

  drop(event: CdkDragDrop<Exercise[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else if (this.workouts()[this.selectedTab()].length < EXERCISE_LIMIT) {
      this.exerciseAdded.emit(event.previousContainer.data[event.previousIndex]);
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

  deleteExercise(name: string): void {
    this.exerciseDeleted.emit(name)
    // this.workouts()[this.selectedTab()].splice(this.workouts()[this.selectedTab()].findIndex(exercise => exercise.name === exerciseName), 1);
  }
}

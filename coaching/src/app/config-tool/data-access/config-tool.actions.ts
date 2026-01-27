import { createAction, props } from '@ngrx/store';
import { Exercise }            from 'coaching-shared';

export const deleteExercise = createAction('[ConfigTool] Delete Exercise', props<{
  name: string, selectedTab: number}>());

export const addExerciseToWorkout = createAction('[ConfigTool] Add Exercise To Workout', props<{ exercise: Exercise, selectedTab: number }>());

export const addWorkout = createAction('[ConfigTool] Add Workout');

export const deleteWorkout = createAction('[ConfigTool] Delete Workout', props<{ index: number }>());

export const clearWorkout = createAction('[ConfigTool] Clear Workout', props<{ index: number }>());

export const copyWorkout = createAction('[ConfigTool] Copy Workout', props<{ index: number }>());

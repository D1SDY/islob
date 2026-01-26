import { createAction, props } from '@ngrx/store';
import { Exercise }            from 'coaching-shared';

export const deleteExercise = createAction('[ConfigTool] Delete Exercise', props<{
  name: string, selectedTab: number}>());

export const deleteDay = createAction('[ConfigTool] Delete Day');

export const addExerciseToWorkout = createAction('[ConfigTool] Add Exercise To Workout', props<{ exercise: Exercise, selectedTab: number }>());

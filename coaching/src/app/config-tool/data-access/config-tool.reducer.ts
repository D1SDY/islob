import { createFeature, createReducer, on } from '@ngrx/store';
import { ConfigToolState }                  from '../utilities/models/config-tool.state';
import * as ConfigToolActions               from './config-tool.actions';
import { LIST_OF_EXERCISES }                from './temp';

export const configToolFeatureKey = 'configTool';

export const initialState: ConfigToolState = {
  exercises: LIST_OF_EXERCISES,
  activeWorkoutBuild: [[]],
};

export const configToolReducer = createReducer(
  initialState,
  on(ConfigToolActions.addExerciseToWorkout, (state, props) => {
    const oldTab = state.activeWorkoutBuild[props.selectedTab] ?? [];
    const updatedTab = [...oldTab, props.exercise];
    const activeWorkoutBuild = state.activeWorkoutBuild.map((tab, index) => index === props.selectedTab ? updatedTab : tab);
    return {...state, activeWorkoutBuild};
  }),
  on(ConfigToolActions.deleteExercise, (state, props) => {
    const activeWorkoutBuild = [...state.activeWorkoutBuild];
    const tab = activeWorkoutBuild[props.selectedTab] ?? [];
    activeWorkoutBuild[props.selectedTab] = tab.filter(ex => ex.name !== props.name);
    return {
      ...state,
      activeWorkoutBuild,
    };
  }),
  on(ConfigToolActions.addWorkout, (state) => {
    const activeWorkoutBuild = [...state.activeWorkoutBuild];
    activeWorkoutBuild.push([]);
    return {...state, activeWorkoutBuild};
  }),
  on(ConfigToolActions.deleteWorkout, (state, props) => {
    const activeWorkoutBuild = [...state.activeWorkoutBuild];
    activeWorkoutBuild.splice(props.index, 1);
    return {...state, activeWorkoutBuild};
  }),
  on(ConfigToolActions.clearWorkout, (state, props) => {
    const activeWorkoutBuild = [...state.activeWorkoutBuild];
    activeWorkoutBuild[props.index] = [];
    return {...state, activeWorkoutBuild};
  }),
  on(ConfigToolActions.copyWorkout, (state, props) => {
    const activeWorkoutBuild = [...state.activeWorkoutBuild];
    activeWorkoutBuild.push(activeWorkoutBuild[props.index]);
    return {...state, activeWorkoutBuild};
  })
);

export const configToolFeature = createFeature({name: configToolFeatureKey, reducer: configToolReducer});

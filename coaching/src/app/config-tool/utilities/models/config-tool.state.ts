import { Exercise } from 'coaching-shared';

export interface ConfigToolState {
  exercises: Exercise[];
  activeWorkoutBuild: Exercise[][];
}

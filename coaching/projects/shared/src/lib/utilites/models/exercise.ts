import { Equipment }    from '../enums/equipment';
import { ExerciseType } from '../enums/exercise-type.enum';
import { Location }     from '../enums/location';
import { MuscleGroup }  from '../enums/muscle.group';
import { WeightSystem } from '../enums/weight-system';

export interface Exercise {
  name: string;
  muscleGroup: MuscleGroup;
  equipment: Equipment;
  location: Location;
  exerciseType: ExerciseType;
  weightSystem: WeightSystem;
  images?: string[];
  link?: string;
}

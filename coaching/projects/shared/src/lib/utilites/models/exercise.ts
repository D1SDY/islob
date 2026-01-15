import { ExerciseType } from '../enums/exercise-type.enum';
import { Location }     from '../enums/location';
import { MuscleGroup }  from '../enums/muscle.group';
import { Equipment }    from '../enums/equipment';

export interface Exercise {
  name: string;
  muscleGroup: MuscleGroup;
  equipment: Equipment;
  location: Location;
  exerciseType: ExerciseType;
  images?: string[];
  link?: string;
}

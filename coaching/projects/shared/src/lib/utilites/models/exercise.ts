import { BodyPositionEnum }    from '../enums/body-position.enum';
import { ExerciseTypeEnum }    from '../enums/exercise-type.enum';
import { JointComplexityEnum } from '../enums/joint-complexity.enum';
import { LoadTypeEnum }        from '../enums/load-type.enum';
import { LocationEnum }        from '../enums/location.enum';
import { MuscleGroupEnum }     from '../enums/muscle-group.enum';
import { UniLateralTypeEnum }  from '../enums/unilateral-type.enum';
import { WeightSystemEnum }    from '../enums/weight-system.enum';

export interface Exercise {
  name: string;
  muscleGroup: MuscleGroupEnum;
  bodyPosition: BodyPositionEnum;
  location: LocationEnum;
  unilateralType: UniLateralTypeEnum;
  jointComplexity: JointComplexityEnum;
  loadType: LoadTypeEnum;
  exerciseType: ExerciseTypeEnum;
  weightSystem: WeightSystemEnum;
  images?: string[];
  link?: string;
}

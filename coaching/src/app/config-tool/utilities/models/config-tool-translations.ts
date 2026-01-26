import {
  BodyPositionEnum,
  ExerciseTypeEnum,
  JointComplexityEnum,
  LoadTypeEnum,
  LocationEnum,
  MuscleGroupEnum,
  Translations,
  UniLateralTypeEnum
} from 'coaching-shared';

export interface ConfigToolTranslations extends Translations {
  [LoadTypeEnum.BODY_WEIGHT]: string,
  [LoadTypeEnum.MOBILITY]: string,
  [LoadTypeEnum.DUMBBELL]: string,
  [LoadTypeEnum.BARBELL]: string,
  [LoadTypeEnum.KETTLEBELL]: string,
  [LoadTypeEnum.MEDBALL]: string,
  [LoadTypeEnum.BAND]: string,
  [LoadTypeEnum.MINI_BAND]: string,
  [LoadTypeEnum.TRX]: string,
  [LoadTypeEnum.BOSU]: string,
  [LoadTypeEnum.YOGA_BALL]: string,
  [LoadTypeEnum.MACHINE]: string,
  [LoadTypeEnum.CABLE]: string

  [MuscleGroupEnum.CHEST]: string
  [MuscleGroupEnum.BACK]: string
  [MuscleGroupEnum.SHOULDERS]: string
  [MuscleGroupEnum.ARMS]: string
  [MuscleGroupEnum.BICEPS]: string
  [MuscleGroupEnum.TRICEPS]: string
  [MuscleGroupEnum.FOREARMS]: string
  [MuscleGroupEnum.CORE]: string
  [MuscleGroupEnum.LEGS]: string
  [MuscleGroupEnum.GLUTES]: string
  [MuscleGroupEnum.QUADS]: string
  [MuscleGroupEnum.HAMSTRINGS]: string
  [MuscleGroupEnum.ADDUCTORS]: string
  [MuscleGroupEnum.ABDUCTORS]: string
  [MuscleGroupEnum.CALVES]: string
  [MuscleGroupEnum.FULL_BODY]: string

  [LocationEnum.GYM]: string,
  [LocationEnum.HOME]: string,

  [ExerciseTypeEnum.BASIC]: string,
  [ExerciseTypeEnum.ISOLATION]: string,
  [ExerciseTypeEnum.MOBILITY]: string,
  [ExerciseTypeEnum.CARDIO]: string,
  [ExerciseTypeEnum.PLYOMETRICS]: string,

  [BodyPositionEnum.STANDING]: string,
  [BodyPositionEnum.SEATED]: string,
  [BodyPositionEnum.LYING]: string,
  [BodyPositionEnum.KNEELING]: string,
  [BodyPositionEnum.HALF_KNEELING]: string,
  [BodyPositionEnum.QUADRUPED]: string,
  [BodyPositionEnum.SPLIT_STANCE]: string,

  [JointComplexityEnum.ISOLATION]: string,
  [JointComplexityEnum.COMPOUND]: string,

  [UniLateralTypeEnum.BILATERAL]: string,
  [UniLateralTypeEnum.UNILATERAL]: string,
}

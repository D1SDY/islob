import { Equipment, ExerciseType, Location, MuscleGroup, Translations } from 'coaching-shared';

export interface ConfigToolTranslations extends Translations {
  [Equipment.BODY_WEIGHT]: string,
  [Equipment.BAR]: string,
  [Equipment.DUMBBELLS]: string,
  [Equipment.MACHINE]: string,
  [Equipment.RESISTANCE_BANDS]: string,
  [Equipment.TRX]: string,
  [Equipment.KETTLEBELL]: string,

  [MuscleGroup.CHEST]: string,
  [MuscleGroup.BACK]: string,
  [MuscleGroup.LEGS]: string,
  [MuscleGroup.BUTTOCKS]: string,
  [MuscleGroup.SHOULDERS]: string,
  [MuscleGroup.ARMS]: string,
  [MuscleGroup.CORE]: string,
  [MuscleGroup.FULL_BODY]: string,

  [Location.GYM]: string,
  [Location.HOME]: string,

  [ExerciseType.BASIC]: string,
  [ExerciseType.ISOLATION]: string,
  [ExerciseType.MOBILITY]: string,
  [ExerciseType.CARDIO]: string,
  [ExerciseType.PLYOMETRICS]: string,
}

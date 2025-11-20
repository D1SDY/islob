import { Equipment, Exercise, ExerciseType, Location, MuscleGroup } from 'coaching-shared';

export const LIST_OF_EXERCISES: Exercise[] = [
  {
    name: 'Bench Press',
    muscleGroup: MuscleGroup.CHEST,
    equipment: Equipment.BAR,
    location: Location.GYM,
    exerciseType: ExerciseType.BASIC,
  },
  {
    name: 'Squat',
    muscleGroup: MuscleGroup.LEGS,
    equipment: Equipment.BAR,
    location: Location.GYM,
    exerciseType: ExerciseType.BASIC,
  },
  {
    name: 'Deadlift',
    muscleGroup: MuscleGroup.BACK,
    equipment: Equipment.BAR,
    location: Location.GYM,
    exerciseType: ExerciseType.BASIC,
  },
  {
    name: 'Pull-Up',
    muscleGroup: MuscleGroup.BACK,
    equipment: Equipment.BODY_WEIGHT,
    location: Location.GYM,
    exerciseType: ExerciseType.BASIC,
  },
  {
    name: 'Shoulder Press',
    muscleGroup: MuscleGroup.SHOULDERS,
    equipment: Equipment.DUMBBELLS,
    location: Location.GYM,
    exerciseType: ExerciseType.BASIC,
  },
  {
    name: 'Bicep Curl',
    muscleGroup: MuscleGroup.ARMS,
    equipment: Equipment.DUMBBELLS,
    location: Location.GYM,
    exerciseType: ExerciseType.ISOLATION,
  },
  {
    name: 'Skull Crusher',
    muscleGroup: MuscleGroup.ARMS,
    equipment: Equipment.DUMBBELLS,
    location: Location.GYM,
    exerciseType: ExerciseType.ISOLATION,
  },
  {
    name: 'Lunge',
    muscleGroup: MuscleGroup.LEGS,
    equipment: Equipment.BODY_WEIGHT,
    location: Location.GYM,
    exerciseType: ExerciseType.BASIC,
  },
  {
    name: 'Plank',
    muscleGroup: MuscleGroup.CORE,
    equipment: Equipment.BODY_WEIGHT,
    location: Location.GYM,
    exerciseType: ExerciseType.ISOLATION,
  },
  {
    name: 'Lat Pulldown',
    muscleGroup: MuscleGroup.BACK,
    equipment: Equipment.MACHINE,
    location: Location.GYM,
    exerciseType: ExerciseType.BASIC,
  },
];

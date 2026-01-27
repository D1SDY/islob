import { FormControl, FormGroup } from '@angular/forms';

export type ExerciseSet = FormGroup<{
  reps: FormControl<any>;
  rest: FormControl<any>;
  weight?: FormControl<any>;
  effort?: FormControl<any>;
}>

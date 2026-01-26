import { ChangeDetectionStrategy, Component }                                 from '@angular/core';
import { MatButton }                                                          from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'confirm-dialog-dialog',
  templateUrl: 'delete-exercise.html',
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose,
    MatDialogTitle
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteExerciseDialog {
}

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  MatButton
}                                                     from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
}                                                     from '@angular/material/dialog';

@Component({
  selector: 'confirm-dialog-dialog',
  templateUrl: 'confirm-dialog.html',
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose,
    MatDialogTitle
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmDialog {
  data = inject<{ title: string, content: string }>(MAT_DIALOG_DATA);
}

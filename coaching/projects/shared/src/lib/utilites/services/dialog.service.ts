import { inject, Injectable } from '@angular/core';
import { MatDialog }          from '@angular/material/dialog';
import { ConfirmDialog }      from '../../components/confirm-dialog/confirm-dialog';
import { ConfirmDialogData }  from '../models/dialog-types';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  readonly dialog = inject(MatDialog);

  openConfirmDialog(data: ConfirmDialogData) {
    return this.dialog.open<ConfirmDialog, ConfirmDialogData, boolean>(ConfirmDialog, {data}).afterClosed();
  }
}

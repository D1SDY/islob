import {Component, input} from '@angular/core';
import {Exercise} from 'coaching-shared';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup, copyArrayItem,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-config-tool-exersise-list',
  imports: [
    CdkDropList,
    CdkDrag
  ],
  templateUrl: './config-tool-exersise-list.html',
  styleUrl: './config-tool-exersise-list.scss',
})
export class ConfigToolExersiseList {

  exercises = input.required<Exercise[]>();
  connectedTo = input.required<string[]>();
}

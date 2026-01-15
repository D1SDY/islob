import { CdkDrag, CdkDropList }     from '@angular/cdk/drag-drop';
import { Component, input, output } from '@angular/core';
import { Exercise }                 from 'coaching-shared';

@Component({
  selector: 'app-config-tool-exersise-list',
  imports: [
    CdkDropList,
    CdkDrag,
  ],
  templateUrl: './config-tool-exersise-list.html',
  styleUrl: './config-tool-exersise-list.scss',
})
export class ConfigToolExersiseList {
  exercises = input.required<Exercise[]>();
  connectedTo = input.required<string[]>();

  addedExercise = output<Exercise>();

  addExercise(exercise: Exercise) {
    this.addedExercise.emit(exercise);
  }

  openVideo(link: string): void {
    window.open(link, 'youtube');
  }
}

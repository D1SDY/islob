import { CdkDrag, CdkDropList }     from '@angular/cdk/drag-drop';
import { Component, input, output } from '@angular/core';
import { Exercise }                 from 'coaching-shared';

@Component({
  selector: 'app-config-tool-exercise-list',
  imports: [
    CdkDropList,
    CdkDrag,
  ],
  templateUrl: './config-tool-exercise-list.component.html',
  styleUrl: './config-tool-exercise-list.component.scss',
})
export class ConfigToolExerciseList {
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

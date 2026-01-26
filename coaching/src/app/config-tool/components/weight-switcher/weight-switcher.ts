import { ChangeDetectionStrategy, Component, effect, input, output } from '@angular/core';
import { WeightSystemEnum }                                          from 'coaching-shared';

@Component({
  selector: 'weight-switcher',
  templateUrl: './weight-switcher.html',
  styleUrl: './weight-switcher.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeightSwitcher {
  activeWeightSystem = input.required<WeightSystemEnum>();

  weightSystemChanged = output<WeightSystemEnum>();

  currentWeightSystem: WeightSystemEnum = WeightSystemEnum.KG;

  constructor() {
    effect(() => {
      this.currentWeightSystem = this.activeWeightSystem();
    });
  }

  switchWeightSystem(system: WeightSystemEnum): void {
    this.currentWeightSystem = system;
    this.weightSystemChanged.emit(system);
  }

  protected readonly WeightSystem = WeightSystemEnum;
}

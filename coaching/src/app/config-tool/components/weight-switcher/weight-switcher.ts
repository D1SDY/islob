import { ChangeDetectionStrategy, Component, effect, input, output } from '@angular/core';
import { WeightSystem }                                              from 'coaching-shared';

@Component({
  selector: 'weight-switcher',
  templateUrl: './weight-switcher.html',
  styleUrl: './weight-switcher.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeightSwitcher {
  activeWeightSystem = input.required<WeightSystem>();

  weightSystemChanged = output<WeightSystem>();

  currentWeightSystem: WeightSystem = WeightSystem.KG;

  constructor() {
    effect(() => {
      this.currentWeightSystem = this.activeWeightSystem();
    });
  }

  switchWeightSystem(system: WeightSystem): void {
    this.currentWeightSystem = system;
    this.weightSystemChanged.emit(system);
  }

  protected readonly WeightSystem = WeightSystem;
}

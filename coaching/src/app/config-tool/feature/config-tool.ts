import { Component, computed, signal }   from '@angular/core';
import { MatButton }                     from '@angular/material/button';
import { MatDrawer, MatDrawerContainer } from '@angular/material/sidenav';
import { Exercise }                      from 'coaching-shared';
import { ConfigToolExersiseList }        from '../components/config-tool-exersise-list/config-tool-exersise-list';
import { ConfigToolFiltersLayout }       from '../components/config-tool-filters-layout/config-tool-filters-layout';
import { WorkoutLayout }                 from '../components/workout-layout/workout-layout';
import { applyActiveFilters }            from '../utilities/helpers/filters.helpers';
import { ConfigToolFilters }             from '../utilities/models/config-tool-filters';
import { LIST_OF_EXERCISES }             from './temp';

@Component({
  selector: 'app-config-tool',
  imports: [
    MatDrawerContainer,
    MatDrawer,
    MatButton,
    ConfigToolFiltersLayout,
    ConfigToolExersiseList,
    WorkoutLayout,
  ],
  templateUrl: './config-tool.html',
  styleUrl: './config-tool.scss',
})
export class ConfigTool {
  filters = signal<ConfigToolFilters>({} as ConfigToolFilters);
  workouts = signal<Exercise[][]>([[]]);
  selectedTab = signal(0);

  exercises = computed(() => applyActiveFilters(this.filters(), LIST_OF_EXERCISES));
  autoCompleteOptions = computed(() => this.exercises().map(exercise => exercise.name));


  applyFilters(filters: ConfigToolFilters) {
    this.filters.set(filters);
  }

  addExercise(exercise: Exercise) {
    this.workouts.update(current => {
      current[this.selectedTab()].push(exercise);
      return [...current];
    });
  }

  addWorkout() {
    this.workouts().push([]);
  }

  deleteWorkout(index: number) {
    this.workouts().splice(index, 1);
  }

}

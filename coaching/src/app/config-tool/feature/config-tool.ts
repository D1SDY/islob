import { Component, computed, inject, signal, viewChild }  from '@angular/core';
import { MatButton }                                       from '@angular/material/button';
import { MatDrawer, MatDrawerContainer, MatDrawerContent } from '@angular/material/sidenav';
import { Store }                                           from '@ngrx/store';
import { Exercise, EXERCISE_LIMIT }                        from 'coaching-shared';
import {
  ConfigToolExerciseList
}                                                          from '../components/config-tool-exersise-list/config-tool-exercise-list.component';
import {
  ConfigToolFiltersLayout
}                                                          from '../components/config-tool-filters-layout/config-tool-filters-layout';
import { DrawerResizeDirective }                           from '../components/directives/drawer-resize-directive';
import { WorkoutLayout }                                   from '../components/workout-layout/workout-layout';
import * as ConfigToolActions                              from '../data-access/config-tool.actions';
import { selectActiveWorkoutBuild, selectAllExercises }    from '../data-access/config-tool.selectors';
import { applyActiveFilters }                              from '../utilities/helpers/filters.helpers';
import { ConfigToolFilters }                               from '../utilities/models/config-tool-filters';

@Component({
  selector: 'app-config-tool',
  imports: [
    MatDrawerContainer,
    MatDrawer,
    MatButton,
    ConfigToolFiltersLayout,
    ConfigToolExerciseList,
    WorkoutLayout,
    MatDrawerContent,
    DrawerResizeDirective,
  ],
  templateUrl: './config-tool.html',
  styleUrl: './config-tool.scss',
})
export class ConfigTool {
  private readonly store = inject<Store>(Store);

  drawer = viewChild<MatDrawer>(MatDrawer);

  exerciseList = this.store.selectSignal(selectAllExercises);
  workouts = this.store.selectSignal(selectActiveWorkoutBuild);

  filters = signal<ConfigToolFilters>({} as ConfigToolFilters);
  selectedTab = signal(0);

  exercises = computed(() => applyActiveFilters(this.filters(), this.exerciseList()));
  autoCompleteOptions = computed(() => this.exercises().map(exercise => exercise.name));

  drawerWidth = signal(950);
  contentPadding = signal(0);

  onDrawerResize(newWidth: number): void {
    this.drawerWidth.set(newWidth);
    this.contentPadding.set(newWidth);
  }

  toggleDrawer(): void {
    if (this.drawer().opened) {
      this.drawer().close();
      this.contentPadding.set(0);   // reset when closed
    } else {
      this.contentPadding.set(this.drawerWidth());
      this.drawer().open();
    }
  }

  applyFilters(filters: ConfigToolFilters) {
    this.filters.set(filters);
  }

  addExercise(exercise: Exercise): void {
    //Todo: add more fancy validator for the exercise to be added
    if (this.workouts()[this.selectedTab()].length < EXERCISE_LIMIT) {
      this.store.dispatch(ConfigToolActions.addExerciseToWorkout({exercise, selectedTab: this.selectedTab()}));
    }
  }

  deleteExercise(name: string): void {
    this.store.dispatch(ConfigToolActions.deleteExercise({name, selectedTab: this.selectedTab()}));
  }

  addWorkout(): void {
    this.store.dispatch(ConfigToolActions.addWorkout());
  }

  deleteWorkout(index: number): void {
    this.store.dispatch(ConfigToolActions.deleteWorkout({index}));
  }

  clearWorkout(index: number): void {
    this.store.dispatch(ConfigToolActions.clearWorkout({index}));
  }

  copyWorkout(index: number): void {
    this.store.dispatch(ConfigToolActions.copyWorkout({index}));
  }

}

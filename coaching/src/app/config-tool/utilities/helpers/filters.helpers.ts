import { Exercise }               from 'coaching-shared';
import { ConfigToolFilters }      from '../models/config-tool-filters';
import { ConfigToolTranslations } from '../models/config-tool-translations';

export function applyActiveFilters(filters: ConfigToolFilters, exercises: Exercise[]): Exercise[] {
  const search = (filters.search ?? "").trim().toLowerCase();

  return exercises.filter(exercise => {
    if (search && !exercise.name.toLowerCase().includes(search)) return false;
    if (filters?.muscleGroup?.length > 0 && !filters.muscleGroup?.includes(exercise.muscleGroup)) return false;
    if (filters?.loadType?.length > 0 && !filters.loadType?.includes(exercise.loadType)) return false;
    return true;
  });
}

export function buildDropDownOptions(translations: ConfigToolTranslations, options: string[]) {
  return options.map(option => ({label: translations[option], value: option}));
}

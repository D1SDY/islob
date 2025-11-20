import { Exercise }               from 'coaching-shared';
import { ConfigToolFilters }      from '../models/config-tool-filters';
import { ConfigToolTranslations } from '../models/config-tool-translations';

export function applyActiveFilters(filters: ConfigToolFilters, exercises: Exercise[]): Exercise[] {
  const search = (filters.search ?? "").trim().toLowerCase();

  return exercises.filter(exercise => {
    if (search && !exercise.name.toLowerCase().includes(search)) return false;
    if (filters?.muscle?.length > 0 && !filters.muscle?.includes(exercise.muscleGroup)) return false;
    if (filters?.equipment?.length > 0 && !filters.equipment?.includes(exercise.equipment)) return false;
    return true;
  });
}

export function buildDropDownOptions(translations: ConfigToolTranslations, options: string[]) {
  return options.map(option => ({label: translations[option], value: option}));
}

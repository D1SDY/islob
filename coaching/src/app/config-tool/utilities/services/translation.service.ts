import { Injectable }             from '@angular/core';
import en                         from '../../locale/en.json';
import { ConfigToolTranslations } from '../models/config-tool-translations';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  translations(): ConfigToolTranslations {
    return en as ConfigToolTranslations;
  }
}

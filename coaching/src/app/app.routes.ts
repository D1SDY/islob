import { Routes }            from '@angular/router';
import { provideState }      from '@ngrx/store';
import { configToolFeature } from './config-tool/data-access/config-tool.reducer';

export const routes: Routes = [{
  path: 'config-tool',
  loadComponent: ()=>import('./config-tool/feature/config-tool').then(m=>m.ConfigTool),
  providers: [
    provideState(configToolFeature)
  ]
}, {
  path: '',
  loadComponent: () => import('./main/feature/main').then(m => m.Main),
}];

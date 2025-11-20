import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: 'config-tool',
  loadComponent: ()=>import('./config-tool/feature/config-tool').then(m=>m.ConfigTool)
}];

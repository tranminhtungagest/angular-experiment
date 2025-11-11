import { Routes } from '@angular/router';
import { ScenarioPage } from './components/scenario-page/scenario-page';
import { App } from './app';
export const routes: Routes = [
  { path: '', component: App },
  { path: 'scenario/:framework/:component/:control/:sample', component: ScenarioPage },
];

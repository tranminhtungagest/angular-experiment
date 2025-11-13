import { Routes } from '@angular/router';
import { ScenarioPage } from './components/scenario-page/scenario-page';
import { HomePage } from './components/home-page/home-page';

export const routes: Routes = [
  { path: 'home', component:HomePage },
  { path: 'scenario/:framework/:component/:control/:sample', component: ScenarioPage },
  // same as the default English path, but with the /ja prefix
  {
    path: 'ja',
    children: [
      { path: 'home', component: HomePage },
      { path: 'scenario/:framework/:component/:control/:sample', component: ScenarioPage },
    ],
  },
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProgressIndicatorVisualComponent } from './visual/progress-indicator/progress-indicator-visual.component';

import { VisualComponent } from './visual/visual.component';

const routes: Routes = [
  {
    path: 'visual',
    component: VisualComponent
  },
  {
    path: 'visual/progress-indicator',
    component: ProgressIndicatorVisualComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JobsComponent} from './jobs/jobs.component';

const routes: Routes = [
  {
    path: '',
    component: JobsComponent
  },
  // Changed edit job component with routing to Modal
  // { path: 'job/:id', component: JobComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureJobRoutingModule {

}

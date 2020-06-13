import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JobsComponent} from './jobs/jobs.component';
import {JobComponent} from './job/job.component';

const routes: Routes = [
  {path: 'jobs' , component: JobsComponent },
  { path: 'job/:id', component: JobComponent },
  { path: '', redirectTo: '/jobs', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

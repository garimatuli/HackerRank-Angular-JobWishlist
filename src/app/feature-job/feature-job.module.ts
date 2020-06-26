import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JobsComponent} from './jobs/jobs.component';
import {JobComponent} from './job/job.component';
import {DeleteJobComponent} from './delete-job/delete-job.component';
import {FeatureJobRoutingModule} from './feature-job-routing.module';
import {ModalComponent} from '../modal/modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    JobsComponent,
    JobComponent,
    DeleteJobComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FeatureJobRoutingModule,
  ],
  exports: []
})
export class FeatureJobModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JobsComponent} from './jobs/jobs.component';
import {JobComponent} from './job/job.component';
import {DeleteJobComponent} from './delete-job/delete-job.component';
import {FeatureJobRoutingModule} from './feature-job-routing.module';
import {ModalComponent} from '../shared/modal/modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    JobsComponent,
    JobComponent,
    DeleteJobComponent,
    // ModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FeatureJobRoutingModule,
    SharedModule
  ],
  exports: []
})
export class FeatureJobModule { }

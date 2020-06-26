import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturePlaceRoutingModule } from './feature-place-routing.module';
import {PlacesComponent} from './places/places.component';

@NgModule({
  declarations: [
    PlacesComponent
  ],
  imports: [
    CommonModule,
    FeaturePlaceRoutingModule
  ]
})
export class FeaturePlaceModule { }

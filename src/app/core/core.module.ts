import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent} from './nav/nav.component';
import {DemoAlertBasicComponent} from './alerts/alerts.component';
import {AlertModule} from 'ngx-bootstrap/alert';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    NavComponent,
    DemoAlertBasicComponent
  ],
  imports: [
    CommonModule,
    AlertModule.forRoot(),
    RouterModule,
  ],
  exports: [
    NavComponent,
    DemoAlertBasicComponent
    ]
})
export class CoreModule {
}

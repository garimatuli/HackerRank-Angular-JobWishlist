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
  /* As Navigation and Alert components are to be used by other modules and components which lie outside the core module, so,
      apart from declaring these in declarations array, we also need to export these components in the export array as shown below
   */
  exports: [
    NavComponent,
    DemoAlertBasicComponent
    ]
})
export class CoreModule {
}

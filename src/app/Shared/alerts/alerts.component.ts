import { Component } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alerts.component.html'
})
export class DemoAlertBasicComponent {

  dismissible = true;
  defaultAlerts: any[] = [
    {
      type: 'success',
      msg: `You successfully read this important alert message.`
    }
  ];
  alerts = this.defaultAlerts;

  reset(): void {
    this.alerts = this.defaultAlerts;
  }

  onClosed(dismissedAlert: any): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }
}

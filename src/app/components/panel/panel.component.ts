import { Component } from '@angular/core';
import { PanelService } from './panel.service';

@Component({
  selector: 'app-panel',
  template: `
    <ng-content></ng-content>`,
  providers: [
    PanelService
  ]
})
export class PanelComponent {
}

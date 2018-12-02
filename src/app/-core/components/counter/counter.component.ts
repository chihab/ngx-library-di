import { Component } from '@angular/core';
import { CoreService } from '../../services/core-service.service';

@Component({
  selector: 'app-core-counter',
  template: `
    <button (click)="click()"> +</button>
    <span style="font-weight: bold"> {{ count }} </span>
  `
})
export class CounterComponent {

  count: number;

  constructor(private coreService: CoreService) {
    this.count = this.coreService.get();
  }

  click() {
    this.coreService.increment();
    this.count = this.coreService.get();
  }

}

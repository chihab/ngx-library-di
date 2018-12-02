import { Injectable } from '@angular/core';

// import { CoreServiceModule } from '../-core-service.module';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  count = 0;

  constructor() {
    console.log(this.constructor.name);
  }

  get() {
    return this.count;
  }

  increment() {
    this.count++;
  }
}

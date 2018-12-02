import { Injectable } from '@angular/core';

@Injectable()
export class UnusedLibService {

  constructor() {
    console.log(this.constructor.name);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthLibService {

  constructor() {
    console.log(this.constructor.name);
  }
}

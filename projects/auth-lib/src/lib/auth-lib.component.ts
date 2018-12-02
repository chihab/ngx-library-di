import { Component, OnInit } from '@angular/core';
import { AuthLibService } from './auth-lib.service';

@Component({
  selector: 'ngx-auth-lib',
  template: `
    <p>
      auth-lib works pretty pretty fine!
    </p>
  `,
  styles: []
})
export class AuthLibComponent implements OnInit {

  constructor(private authLib: AuthLibService) {
  }

  ngOnInit() {
  }

}

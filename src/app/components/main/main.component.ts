import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../-core/services/core-service.service';
import { AuthLibService } from '../../../../projects/auth-lib/src/lib/auth-lib.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private coreService: CoreService,
              private authService: AuthLibService
  ) {
  }

  ngOnInit() {
  }

}

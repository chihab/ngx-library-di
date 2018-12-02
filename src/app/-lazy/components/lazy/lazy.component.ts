import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent implements OnInit {

  constructor(private appService: AppService) {
  }

  ngOnInit() {
  }

}

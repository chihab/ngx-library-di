import { Component, OnInit } from '@angular/core';
import { HostService } from './host.service';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss'],
  providers: [HostService]
})
export class HostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

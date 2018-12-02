import { Component, Host, OnInit } from '@angular/core';
import { PanelService } from '../panel/panel.service';

@Component({
  selector: 'app-hosted',
  templateUrl: './hosted.component.html',
  styleUrls: ['./hosted.component.scss']
})
export class HostedComponent implements OnInit {

  constructor(@Host() private panelService: PanelService) { }

  ngOnInit() {
  }

}

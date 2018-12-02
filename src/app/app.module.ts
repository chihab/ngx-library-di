import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { CoreModule } from './-core/-core.module';
import { RouterModule } from '@angular/router';
import { EagerModule } from './-eager/-eager.module';
import { AuthLibModule } from 'auth-lib';
import { AppService } from './services/app.service';
import { SampleDirective } from './directives/sample.directive';
import { HostComponent } from './components/host/host.component';
import { PanelComponent } from './components/panel/panel.component';
import { HostedComponent } from './components/hosted/hosted.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SampleDirective,
    HostComponent,
    PanelComponent,
    HostedComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AuthLibModule,
    RouterModule.forRoot([
      {
        path: '', component: MainComponent
      },
      {
        path: 'lazy', loadChildren: './-lazy/-lazy.module#LazyModule'
      }
    ]),
    EagerModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

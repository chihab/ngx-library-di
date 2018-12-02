import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './components/counter/counter.component';
import { CoreServiceModule } from './-core-service.module';

@NgModule({
  declarations: [
    CounterComponent
  ],
  // providers: [
  //   CoreService
  // ],
  imports: [
    CoreServiceModule,
    CommonModule
  ],
  exports: [
    CounterComponent
  ]
})
export class CoreModule {
}

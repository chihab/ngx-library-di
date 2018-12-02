import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './components/lazy/lazy.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../-core/-core.module';

@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild([{
        path: '',
        component: LazyComponent,
      }]
    )]
})
export class LazyModule {
}

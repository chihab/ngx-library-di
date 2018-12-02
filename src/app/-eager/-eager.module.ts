import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EagerComponent } from './components/eager/eager.component';
import { RouterModule } from '@angular/router';
import { EagerChildComponent } from './components/eager-child/eager-child.component';
import { CoreModule } from '../-core/-core.module';

@NgModule({
  declarations: [EagerComponent, EagerChildComponent],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild([{
      path: 'eager',
      component: EagerComponent,
      children: [{
        path: '', component: EagerChildComponent
      }]
    }])
  ],
  exports: [EagerComponent]
})
export class EagerModule {
}

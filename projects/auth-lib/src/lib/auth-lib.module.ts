import { NgModule } from '@angular/core';
import { AuthLibComponent } from './auth-lib.component';
import { UnusedLibService } from './unused-lib.service';

@NgModule({
  declarations: [AuthLibComponent],
  providers: [
    UnusedLibService
  ],
  exports: [AuthLibComponent]
})
export class AuthLibModule {
}

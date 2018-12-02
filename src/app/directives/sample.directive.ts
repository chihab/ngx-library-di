import { Directive, Host } from '@angular/core';
import { HostService } from '../components/host/host.service';

@Directive({
  selector: '[appSample]'
})
export class SampleDirective {

  constructor(@Host() private hostService: HostService) { }

}

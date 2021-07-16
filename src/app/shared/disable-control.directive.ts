import { Directive, Input } from '@angular/core';
import { AbstractControl, NgControl } from '@angular/forms';

@Directive({
  selector: '[disableControl]'
})
export class DisableControlDirective {

  constructor(private ngControl:NgControl) { }

  @Input() set disableControl( condition : boolean ) {

    const action = condition ? 'disable' : 'enable';
    if(this.ngControl.control)
    {
      this.ngControl.control[action]();
    }
  }

}

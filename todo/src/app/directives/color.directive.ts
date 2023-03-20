import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  @HostBinding('style.color')
  @Input() color?: string;
}

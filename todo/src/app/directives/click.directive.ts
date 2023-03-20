import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appClick]',
})
export class ClickDirective {
  @HostListener('click', ['$event'])
  handleClick(): void {
    console.log('a message');
  }

  constructor() {}
}

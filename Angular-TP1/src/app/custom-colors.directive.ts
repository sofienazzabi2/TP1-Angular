import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomColors]',
})
export class CustomColorsDirective {
  colors: string[] = ['red', 'blue', 'green', 'yellow', 'grey', 'lightblue'];

  @HostBinding('style.color') color: string = '';
  @HostBinding('style.borderColor') borderColor: string = '';

  @HostListener('keyup') keyup() {
    this.color = this.colors[Math.ceil(Math.random() * this.colors.length)];
    this.borderColor = this.color;
  }

  constructor() {}
}

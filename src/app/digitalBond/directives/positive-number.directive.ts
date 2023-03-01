import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPositiveNumber]',
})
export class PositiveNumberDirective {
  private rgex: RegExp = new RegExp('^[0-9]+$');
  constructor(private elementRef: ElementRef) {}
  @HostListener('keydown', ['$event'])
  onKeyDown(e: any) {
    // console.log(e);
    if (e.code === 'NumpadSubtract' && e.key === '-' && e.keyCode === 109) {
      e.preventDefault();
    }
    const inputValue: string = this.elementRef.nativeElement.value.concat(
      e.key
    );
    console.log(e.key);
    if (inputValue && !String(inputValue).match(this.rgex)) {
      e.preventDefault();
    }
  }
}

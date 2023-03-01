import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStringOnly]',
})
export class StringOnlyDirective {
  private rgex: RegExp = new RegExp('^[a-zA-Z]+$');
  constructor(private elementRef: ElementRef) {}
  @HostListener('keydown', ['$event'])
  onKeyDown(e: any) {
    console.log(e);
    const inputValue: string = this.elementRef.nativeElement.value.concat(
      e.key
    );
    console.log(e.key);
    if (inputValue && !String(inputValue).match(this.rgex)) {
      e.preventDefault();
    }
  }
}

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor!: string;

  private el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
    console.log(this.el);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this._highlight(this.highlightColor || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._highlight('black');
  }

  private _highlight(color: string) {
    this.el.style.backgroundColor = color;
  }

  //? @HostListener უსმენს იმ მშობელ კომპონენტს რომელსაც დირექტივა ადევს.
}

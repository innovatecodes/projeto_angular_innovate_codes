import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollSmooth]',
})
export class ScrollSmoothDirective {
  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {}

  @HostListener('click')
  scrollEfect() {
    const html =
      this._elementRef.nativeElement.ownerDocument.querySelector('html');
    this._renderer.setProperty(html, 'scrollTop', 0);
    this._renderer.setStyle(html, 'behavior', 'smooth');
  }
}

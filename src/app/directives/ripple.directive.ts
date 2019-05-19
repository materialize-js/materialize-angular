import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

interface Coordinate {
  x: number;
  y: number;
}

@Directive({
  selector: '[materializeRipple]'
})
export class RippleDirective {
  @Input() rippleDuration = 500;
  @Input() isRippleActive = true;

  private element: HTMLElement;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.createRipple = this.createRipple.bind(this);

    this.element = this.elementRef.nativeElement;
    this.element.classList.add('ripple-element');
  }

  @HostListener('mousedown', ['$event'])
  createRipple(event: any): void {
    if (!this.isRippleActive) {
      return;
    }

    const ripple = document.createElement('div');
    const coordinates = this.getCoordinates(event);
    const radio = this.getRippleRadio(coordinates);

    ripple.classList.add('ripple');

    ripple.style.height = `${ radio * 2 }px`;
    ripple.style.width = `${ radio * 2 }px`;
    ripple.style.top = `${ coordinates.y - radio }px`;
    ripple.style.left = `${ coordinates.x - radio }px`;

    this.element.insertBefore(ripple, this.element.firstChild);

    this.scaleRipple(ripple);
  }

  getCoordinates(event: any): Coordinate {
    const offset = this.getOffset(this.element);

    const y = event.pageY - offset.top;
    const x = event.pageX - offset.left;

    return { x, y };
  }

  getRippleRadio(coordinate: Coordinate): number {
    const height = Math.max(this.element.offsetHeight - coordinate.y, coordinate.y);
    const width = Math.max(this.element.offsetWidth - coordinate.x, coordinate.x);

    const radio = Math.hypot(height, width);

    return radio;
  }

  scaleRipple(ripple: HTMLElement): void {
    setTimeout(() => {
      ripple.style.transitionDuration = `${ this.rippleDuration }ms`;
      ripple.style.transform = 'scale(1)';

      this.hideRipple(ripple);
    }, 0);
  }

  hideRipple(ripple: HTMLElement): void {
    setTimeout(() => {
      ripple.style.transitionDuration = `${ this.rippleDuration }ms`;
      ripple.style.opacity = '0';

      this.removeRipple(ripple);
    }, this.rippleDuration);
  }

  removeRipple(ripple: HTMLElement): void {
    setTimeout(() => {
      this.renderer.removeChild(this.element, ripple);
    }, this.rippleDuration);
  }

  getOffset(element: HTMLElement) {
    const rect = element.getBoundingClientRect();
    const top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const left = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;

    const offset = {
      left: rect.left + left,
      top: rect.top + top
    };

    return offset;
  }
}
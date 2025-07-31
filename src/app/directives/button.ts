import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appButton]',
  standalone: true
})
export class Button {
  @Input() defaultBg = 'linear-gradient(360deg, #71081e 0%, #d7485c 100%)';
  @Input() hoverBg = 'linear-gradient(360deg, #8a0a25 0%, #e05c6e 100%)';

  constructor(private el: ElementRef) {
    this.setBackground(this.defaultBg);
    this.el.nativeElement.style.transition = 'background 0.3s ease';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackground(this.hoverBg);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackground(this.defaultBg);
  }

  private setBackground(bg: string) {
    this.el.nativeElement.style.background = bg;
  }
}

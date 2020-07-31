import { Directive, HostListener, HostBinding, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {


  @HostListener('mouseenter')
  onMouseOuver(){
    // this._renderer.setStyle(this._elementRef.nativeElement, `background-color`, `red`);
    this.backgroundColor = this.highLightColor;
  }


  @HostListener('mouseleave')
  onMouseLeave(){
    // this._renderer.setStyle(this._elementRef.nativeElement, `background-color`, `initial`);
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @Input() defaultColor: string = 'initial';
  @Input('highlight') highLightColor: string = 'blue';


  constructor(private _elementRef: ElementRef, 
    private _renderer: Renderer2) {
    
   }

}

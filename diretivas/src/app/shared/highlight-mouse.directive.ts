import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter')
  onMouseOuver(){
    // this._renderer.setStyle(this._elementRef.nativeElement, `background-color`, `red`);
    this.backgroundColor = 'red';
  }


  @HostListener('mouseleave')
  onMouseLeave(){
    // this._renderer.setStyle(this._elementRef.nativeElement, `background-color`, `initial`);
    this.backgroundColor = 'initial';
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;



  constructor(private _elementRef: ElementRef, 
    private _renderer: Renderer2) {
    
   }

}

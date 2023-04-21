import { Directive,ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

  private isUnderLine: boolean = false; 
  private defaultUnderLine = ''
  @Input('Hover-Affect') affectStyle: string = 'underline';
  constructor(private elm: ElementRef) {}   
@HostListener('mouseenter') onMouseEnter(){
if(this.affectStyle === 'underline'){
  this.elm.nativeElement.style.textDecoration = this.affectStyle;
}else if(this.affectStyle === 'bold'){
this.elm.nativeElement.style.fontWeight = 'bold';
}
}
@HostListener('mouseleave') onMouseLeave(){
  if(this.affectStyle === 'underline'){
    this.elm.nativeElement.style.textDecoration = 'none';
  }else if(this.affectStyle === 'bold'){
  this.elm.nativeElement.style.fontWeight = 'normal';
  }
  }
  

}

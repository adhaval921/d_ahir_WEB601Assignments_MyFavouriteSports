import { Directive,ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

  private isUnderLine: boolean = false; 
  private defaultUnderLine = ''
  @Input() font = '';
  constructor(private elm: ElementRef) {
  this.defaultUnderLine = elm.nativeElement.style.font;
   }
@HostBinding('div.type') get getUnderLine(){
  console.log('HostBinding: font',{
font : this.isUnderLine ? this.font : 'none',
  });
  return this.isUnderLine ? this.font : 'none';
}
@HostListener('mouseenter') onMouseEnter(){
  this.isUnderLine = true;
}
   
@HostListener('mouseleave') onLeave(){
  this.isUnderLine =false;
}
private highlight(font: boolean){
  this.elm.nativeElement.style.font= font ? '3px underline' : 'none';
}

}

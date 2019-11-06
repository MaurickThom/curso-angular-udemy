import { Directive, ElementRef, Renderer2, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  // @Input() defaultColor;
  // @HostBinding('style.color') color:string = this.defaultColor
  constructor(
    private elementRef:ElementRef,
    private renderer:Renderer2
  ) { 
    // elementRef.nativeElement.style.backgroundColor = 'yellow'
  }
  ngOnInit(): void {
    // this.color = this.defaultColor
  }

  @HostListener('mouseenter') mouseover(){
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color','red')
  }

  @HostListener('mouseleave') mouseleave(){
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color', 'transparent');
  }
}

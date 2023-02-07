import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  possibleColors = [
    'darksalmon',
    'hotpink',
    'lightskyblue',
    'goldenrod',
    'peachpuff',
    'mediumspringgreen',
    'cornflowerblue',
    'blanchedalmond',
    'lightslategrey'
  ];
  @HostBinding('style.color') color!: string;
  @HostBinding('style.border-color') borderColor!: string;
  @HostBinding('class.circle') cardTitle: boolean = false;

  
  @HostListener('keydown') newColor() {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);

    this.color = this.borderColor = this.possibleColors[colorPick];
  }

  @HostListener('mouseover') onMouseOver() {
    let part = this.el.nativeElement.querySelector('.card-text');
    let cardText = this.el.nativeElement.querySelector('.card-title');
    if(part){
      this.renderer.setStyle(part, 'display', 'block');
      this.renderer.setStyle(cardText, 'margin', '20px');
    }
    this.el.nativeElement.style.color= "red";

  }

  @HostListener('mouseout') onMouseOut() {
    let part = this.el.nativeElement.querySelector('.card-text');
    let cardText = this.el.nativeElement.querySelector('.card-title');
    if(part){
      this.renderer.setStyle(part, 'display', 'none');
      this.renderer.setStyle(cardText, 'margin', '0px');
    }
    this.el.nativeElement.style.color= "black";
  }
  
  constructor(private el: ElementRef, private renderer:Renderer2 ) { 
    this.cardTitle = this.el.nativeElement.querySelector('.card-text')
  }

}

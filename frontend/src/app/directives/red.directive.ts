import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private el:ElementRef) { 
    el.nativeElement.style.color = "#e9172c",
    el.nativeElement.style.padding = "80px"
  }

}

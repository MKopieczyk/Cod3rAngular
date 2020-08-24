import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm') legumes: Text[]

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) { 
    
  }

  ngOnInit(): void{
    for(let legume of this.legumes){
      this.container.createEmbeddedView(
        this.template, {$implicit : legume})
    }
  }
}

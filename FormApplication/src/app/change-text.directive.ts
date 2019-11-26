import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeText]'
})
export class ChangeTextDirective {

  constructor(Element : ElementRef) 
  {
      console.log(Element);
      Element.nativeElement.innerText = "This text has been modified by changeText directive"
   }

}

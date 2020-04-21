import { Directive, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[ybAddView]'
})
export class AddViewDirective implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(){
    console.log('directive call')
  }

}

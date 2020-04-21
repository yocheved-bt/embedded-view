import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yb-child',
  template: `
   <h2> child component</h2>


  `,
  styles: []
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

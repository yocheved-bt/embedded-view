import { Component, OnInit } from '@angular/core';

@Component({
  selector: "yb-sec-child",
  template: `
    <p>
      sec-child works!
    </p>
    <div>
     
    </div>
  `,
  styles: [],
})
export class SecChildComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

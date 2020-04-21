import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yb-home',
  template: `
  <h2 class="mt-3">
    Home Page
  </h2>
  <ng-template ybAttach="header">
  <button clas="btn btn-primary">Profile action</button>
</ng-template>

  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

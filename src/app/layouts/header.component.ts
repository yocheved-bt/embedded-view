import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yb-header',
  template: `
  <nav class="navbar navbar-dark bg-dark">
  <a class="navbar-brand" href="#">
   Portal
 </a>
 <ng-container ybTarget="header"></ng-container>
</nav>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

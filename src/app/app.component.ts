import { Component, Directive } from '@angular/core';

@Component({
  selector: "app-root",
  template: `
    <h1>embedded-view Example</h1>
    <div>
      <button routerLink="child">child compnent</button>
      <button routerLink="sec-child">sec-child compnent</button>
      <button routerLink="templates">temlates compnent</button>
      <ng-container ybTarget="child"></ng-container>

      
    </div>
    <div>
      <router-outlet></router-outlet>
    </div>

    
  `,
  styles: [``],
})
export class AppComponent {}

import { Component, Directive } from '@angular/core';

@Component({
  selector: "app-root",
  template: `
    <div class="d-flex" id="wrapper">
          <yb-sidenav></yb-sidenav>

      <div id="page-content-wrapper">
        <yb-header></yb-header>

        <div class="container-fluid">
        
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>

    <yb-footer></yb-footer>

  `,
  styles: [`
  #wrapper {
    flex: 1 0 auto;
  }
   #page-content-wrapper {
    min-width: 100vw;

  }
  @media (min-width: 768px) {
  
    #page-content-wrapper {
      min-width: 0;
      width: 100%;
    }
  } 
  `],
})
export class AppComponent {}

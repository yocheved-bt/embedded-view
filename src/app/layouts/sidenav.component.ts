import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yb-sidenav',
  template: `
  <div class="bg-light border-right" id="sidebar-wrapper">
  <div class="sidebar-heading">Teleportation</div>
  <div class="list-group list-group-flush">
      <a routerLink="home" class="list-group-item list-group-item-action bg-light">Home</a>
      <a routerLink="projects" class="list-group-item list-group-item-action bg-light">Projects</a>
      <a routerLink="profile" class="list-group-item list-group-item-action bg-light">Profile</a>

  </div>
  <ng-container ybTarget="nav"></ng-container>

</div>
  `,
  styles: [`
  #sidebar-wrapper {
    min-height: 90vh;
    margin-left: -15rem;
    -webkit-transition: margin .25s ease-out;
    -moz-transition: margin .25s ease-out;
    -o-transition: margin .25s ease-out;
    transition: margin .25s ease-out;
  }
  
  #sidebar-wrapper .sidebar-heading {
    padding: 0.875rem 1.25rem;
    font-size: 1.2rem;
  }
  
  #sidebar-wrapper .list-group {
    width: 15rem;
  }
  
  #page-content-wrapper {
    min-width: 100vw;
  }
  
  #wrapper.toggled #sidebar-wrapper {
    margin-left: 0;
  }
  
  @media (min-width: 768px) {
    #sidebar-wrapper {
      margin-left: 0;
    }
  
    #page-content-wrapper {
      min-width: 0;
      width: 100%;
    }
  
    #wrapper.toggled #sidebar-wrapper {
      margin-left: -15rem;
    }
  }
  `]
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

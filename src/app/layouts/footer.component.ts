import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yb-footer',
  template: `
  <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
  <div class="container text-center">
    <small>Copyright &copy; Your Website</small>
  </div>
  <ng-container ybTarget="footer"></ng-container>
</footer>
  `,
  styles: [`
  #sticky-footer {
    flex-shrink: none;
  }
  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

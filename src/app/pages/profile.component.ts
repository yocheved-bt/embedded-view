import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yb-profile',
  template: `
  <h2 class="mt-3">
  Profile Page
</h2>
<ng-template ybAttach="footer">
<h5> Profile content footer</h5>
</ng-template>
  `,
  styles: []
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

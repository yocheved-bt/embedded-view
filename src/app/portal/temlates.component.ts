import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yb-temlates',
  template: `
    <p>
      temlates works!
    </p>
    <ng-template ybAttach="child">
    <ul class="list-group">
      <li class="list-group-item">Cras justo odio</li>
      <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item">Morbi leo risus</li>
      <li class="list-group-item">Porta ac consectetur ac</li>
      <li class="list-group-item">Vestibulum at eros</li>
    </ul>
  </ng-template>
  `,
  styles: []
})
export class TemlatesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

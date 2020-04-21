import { PortalService } from './portal.service';
import { Directive, OnInit, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ybTarget]'
})
export class TargetDirective implements OnInit{

@Input('ybTarget') targetName:string;

  constructor(  private viewContanerRef:ViewContainerRef,
                private portalService:PortalService) { }

  ngOnInit(){
    console.log('ybTarget Directive');
    this.portalService.addTarget(this.targetName,this.viewContanerRef);
  }

}

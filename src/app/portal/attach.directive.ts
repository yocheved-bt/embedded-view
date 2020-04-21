import { Directive, OnInit, Input, TemplateRef, OnDestroy } from '@angular/core';
import { PortalService } from './portal.service';

@Directive({
  selector: '[ybAttach]'
})
export class AttachDirective implements OnInit,OnDestroy{
  @Input('ybAttach') targetName: string;

  constructor(private portalService:PortalService,
              private templateRef:TemplateRef<any>) { }

  ngOnInit(){
   // console.log('ybAttach Directive');
    this.portalService.attach(this.targetName,this.templateRef);
    console.log('target name -->', this.targetName);

  }
  ngOnDestroy(){
    console.log('ybAttach ngOnDestroy');

this.portalService.clear(this.targetName);
  }

}

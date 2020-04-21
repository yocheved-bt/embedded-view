import { Injectable, ViewContainerRef, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortalService {

  private targets: Map<string, ViewContainerRef>

  constructor() {
    this.targets = new Map<string, ViewContainerRef>();
  }

  addTarget(targetName: string, viewContainer: ViewContainerRef) {
    this.targets.set(targetName, viewContainer);
  }

  attach(targetName, template: TemplateRef<any>) {
    this.getTarget(targetName)?.createEmbeddedView(template);
  }

  clear(targetName: string) {
    this.getTarget(targetName)?.clear();
  }

  private getTarget(targetName: string) {
     let tst= this.targets.has(targetName) ? this.targets.get(targetName) : null;
     return tst;
  }
}

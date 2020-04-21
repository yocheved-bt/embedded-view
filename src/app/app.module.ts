import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { AddViewDirective } from './add-view.directive';
import { SecChildComponent } from './sec-child.component';
import { AttachDirective } from './portal/attach.directive';
import { TargetDirective } from './portal/target.directive';
import { TemlatesComponent } from './portal/temlates.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    AddViewDirective,
    SecChildComponent,
    AttachDirective,
    TargetDirective,
    TemlatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

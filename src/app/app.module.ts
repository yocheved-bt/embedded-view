import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttachDirective } from './portal/attach.directive';
import { TargetDirective } from './portal/target.directive';
import { FooterComponent } from './layouts/footer.component';
import { HeaderComponent } from './layouts/header.component';
import { SidenavComponent } from './layouts/sidenav.component';
import { HomeComponent } from './pages/home.component';
import { ProjectsComponent } from './pages/projects.component';
import { ProfileComponent } from './pages/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AttachDirective,
    TargetDirective,
    FooterComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    ProjectsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

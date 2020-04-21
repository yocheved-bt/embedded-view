import { ProjectsComponent } from './pages/projects.component';
import { HomeComponent } from './pages/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './pages/profile.component';


const routes: Routes = [{
  path: 'home', 
  component: HomeComponent
},
{
  path: 'projects', 
  component: ProjectsComponent
},

{
    path: 'profile', 
    component: ProfileComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

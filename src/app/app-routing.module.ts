import { SecChildComponent } from './sec-child.component';
import { ChildComponent } from './child.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemlatesComponent } from './portal/temlates.component';


const routes: Routes = [{
  path: 'child', 
  component: ChildComponent
},
{
  path: 'sec-child', 
  component: SecChildComponent
},

{
    path: 'templates', 
    component: TemlatesComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

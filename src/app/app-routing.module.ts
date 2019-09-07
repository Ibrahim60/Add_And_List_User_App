import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './user/adduser.component';
import { ListuserComponent } from './user/listuser.component';
import { FormComponent } from './form/form.component';
import { FormlistComponent } from './formlist/formlist.component';


const routes: Routes = [
  { path: 'adduser/:id', component: AdduserComponent },
  { path: 'listuser', component: ListuserComponent },
  { path: 'form' , component: FormComponent },
  { path: 'formlist' , component: FormlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }

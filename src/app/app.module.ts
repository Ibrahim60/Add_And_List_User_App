import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdduserComponent } from './user/adduser.component';
import { ListuserComponent } from './user/listuser.component';
import { FormComponent } from './form/form.component';
import { FormlistComponent } from './formlist/formlist.component';

@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    ListuserComponent,
    FormComponent,
    FormlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

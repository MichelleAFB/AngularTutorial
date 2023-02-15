import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';



//components
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { RegisterComponent } from './register/register.component';
import { RegisterComponent } from './access/register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    EditContactComponent,
    RegisterComponent,
   
  ],
  //stanalone componenets go here
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

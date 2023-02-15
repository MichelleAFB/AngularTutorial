import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';  
import { LoginComponent } from './login/login.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent,
    children:[
        {path:"add",component:AddContactComponent},
        {path:"edit/:id",component:EditContactComponent}
      ]
    },
{path:"login",component:LoginComponent},
{path:"register",component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

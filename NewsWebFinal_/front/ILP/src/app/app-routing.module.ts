import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import{AddNewsComponent} from './components/admin/add-news/add-news.component'
import{HomeComponent} from './components/customer/home/home.component'
import{AboutUsComponent} from './components/customer/about-us/about-us.component'
import {ContactUsComponent} from './components/customer/contact-us/contact-us.component'
import {SportsComponent} from './components/customer/sports/sports.component'
import {EditNewsComponent} from './components/admin/edit-news/edit-news.component'
import { LogoutComponent } from './components/auth/logout/logout.component';





const routes: Routes = [


  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'sports',
    component:SportsComponent,
  },
  {
    path:'about-us',
    component:AboutUsComponent,
  },
  
  {
    path:'contact-us',
    component:ContactUsComponent,
  },
  {
    path:'admin/edit-news',
    component:EditNewsComponent,
  },
  {
    path: 'admin/login',
    component: LoginComponent,
  },
  {
    path: 'admin/register',
    component: RegisterComponent,
  },
  {
    path: 'admin/add-news',
    component:AddNewsComponent,
  },
  {
    path: 'logout',
    component:LogoutComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

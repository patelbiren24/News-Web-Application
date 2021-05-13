import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';

import { AuthService } from './services/auth.service';
import { AddNewsComponent } from './components/admin/add-news/add-news.component';
import { HomeComponent } from './components/customer/home/home.component';
import { AboutUsComponent } from './components/customer/about-us/about-us.component';
import { ContactUsComponent } from './components/customer/contact-us/contact-us.component';
import { NavBarCustomerComponent } from './components/layout/nav-bar-customer/nav-bar-customer.component';
import { SportsComponent } from './components/customer/sports/sports.component';
import { EditNewsComponent } from './components/admin/edit-news/edit-news.component';
import { NavBarAdmComponent } from './components/layout/nav-bar-adm/nav-bar-adm.component';
import { ChatInboxComponent } from './components/customer/chat-inbox/chat-inbox.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatSortModule } from '@angular/material/sort';
import { LogoutComponent } from './components/auth/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    AddNewsComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    NavBarCustomerComponent,
    SportsComponent,
    EditNewsComponent,
    NavBarAdmComponent,
    ChatInboxComponent,
    LogoutComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule,
    MatChipsModule,
    MatSortModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}

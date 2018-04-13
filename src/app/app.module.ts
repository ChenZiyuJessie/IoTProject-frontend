import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserhomeComponent } from './userhome/userhome.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserService } from "./user.service";
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { MemberformComponent } from './memberform/memberform.component';




@NgModule({
  declarations: [
    AppComponent,
    UserhomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    MemberformComponent
  

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

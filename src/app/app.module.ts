import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { AppRoutingModule } from './/app-routing.module'
import { UserService } from './user.service'
import { HttpClientModule } from '@angular/common/http'
import { NavbarComponent } from './navbar/navbar.component'
import { MemberComponent } from './member/member.component'
import { ReportComponent } from './report/report.component'
import { MemberService } from './member/member.service'
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { environment } from '../environments/environment'
import { ElModule } from 'element-angular'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    MemberComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ElModule.forRoot()
  ],
  providers: [UserService, MemberService],
  bootstrap: [AppComponent]
})
export class AppModule {}

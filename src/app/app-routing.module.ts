import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { MemberComponent } from './member/member.component';
import { MemberaddComponent } from './memberadd/memberadd.component';
import { MembereditComponent } from './memberedit/memberedit.component';
import { MemberdetailComponent } from './memberdetail/memberdetail.component';



const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'user', component: UserhomeComponent },
    { path: 'member',component: MemberComponent},
    { path:'memberadd',component:MemberaddComponent},
    { path:'memberdetail',component:MemberdetailComponent},
    { path:'memberedit',component:MembereditComponent}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { MemberComponent } from './member/member.component';
import { MemberaddComponent } from './member/memberadd/memberadd.component';
import { MemberdetailComponent } from './member/memberdetail/memberdetail.component';
import { MembereditComponent } from './member/memberedit/memberedit.component';



const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'user', component: UserhomeComponent },
    { path: 'member',component: MemberComponent},
    { path:'memberadd',component:MemberaddComponent},
    { path:'memberdetial',component:MemberdetailComponent},
    { path:'memberedit',component:MembereditComponent}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [{path: '', redirectTo: '/home', pathMatch: 'full'},
{path: 'home', component: WelcomeComponent},
{path: 'user/login', component: UserLoginComponent},
{path: '**', component: WelcomeComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

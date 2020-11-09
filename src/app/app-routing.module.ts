import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SignupComponent } from './components/signup/signup.component';
import { AngularFireAuthGuard , redirectLoggedInTo , redirectUnauthorizedTo } from '@angular/fire/auth-guard'

const redirectLoggedInToHome = () => redirectLoggedInTo(["home"])
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login'])

const routes: Routes = [
  {path:"home" , component : HomeComponent , canActivate : [AngularFireAuthGuard] , data : {authGuardPipe : redirectUnauthorizedToLogin}},
  {path:"login" , component : LoginComponent ,  canActivate : [AngularFireAuthGuard] , data : {authGuardPipe : redirectLoggedInToHome}},
  {path:"signup" , component : SignupComponent , canActivate : [AngularFireAuthGuard] , data : {authGuardPipe : redirectLoggedInToHome}},
  {path:"**" , component :PagenotfoundComponent },
  {path : "" , redirectTo : "login" , pathMatch : 'full'}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

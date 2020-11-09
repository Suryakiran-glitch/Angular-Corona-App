import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import * as M from 'materialize-css/dist/js/materialize'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth : AngularFireAuth,
    private router : Router
  ) { }

   signUp(email : string , password : string ) {
     if(!email || !password) {
      M.toast({html: 'Fields arte empty', classes: 'rounded'});
     }

     this.auth.createUserWithEmailAndPassword(email,password).then(() => {
      M.toast({html: 'User successfully created!', classes: 'rounded'});
      this.router.navigateByUrl("home")
     }).catch(err => {
       console.log(err);

     })
   }

   login(email : string , password : string) {
    if(!email || !password) {
      M.toast({html: 'Fields arte empty', classes: 'rounded'});
     }

     this.auth.signInWithEmailAndPassword(email,password).then(() => {
      M.toast({html: 'Login successful', classes: 'rounded'});
      this.router.navigateByUrl("home")
      localStorage.setItem('email' , email)
      location.reload()
     }).catch(err => {
       console.log(err);
       M.toast({html: 'Entered Cridentials are incorrect', classes: 'rounded'});
     })

   }

   signout() {
      this.auth.signOut()
     localStorage.removeItem('email')
     this.router.navigateByUrl('login')
     location.reload()
   }

}

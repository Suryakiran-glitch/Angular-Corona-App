import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as M from 'materialize-css/dist/js/materialize'
import { fadeInOnEnterAnimation } from 'angular-animations'
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations : [fadeInOnEnterAnimation({delay : 1500})]
})
export class LoginComponent implements OnInit {

  constructor(
    private auth : AuthService,

  ) { }

  options : object = {
    indicators : false
  }

  ngOnInit(): void {
    var elems = document.querySelectorAll('.carousel')
    var instances = M.Carousel.init(elems,this.options)
}

submitHandler(f : NgForm) {

  const {email,password} = f.form.value
  this.auth.login(email,password)


}



}

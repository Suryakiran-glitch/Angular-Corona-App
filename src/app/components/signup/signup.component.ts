import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { fadeInOnEnterAnimation , fadeOutOnLeaveAnimation } from 'angular-animations'
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations : [fadeInOnEnterAnimation( {duration : 2000} ),
    fadeOutOnLeaveAnimation()
  ]
})
export class SignupComponent implements OnInit {

  constructor(
    private auth : AuthService
  ) { }



  ngOnInit(): void {
  }

  submitHandler(f : NgForm) {
    const {email , password} = f.form.value
    this.auth.signUp(email , password)
  }

}

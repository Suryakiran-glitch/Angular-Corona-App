import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  email : string

  constructor(
    private auth : AuthService
  ) { }

  ngOnInit(): void {
    const data = localStorage.getItem('email')
    this.email = data
  }

  signout() {
    this.auth.signout()
  }

}

import { Component, OnInit } from '@angular/core';
import { CoronaService } from 'src/app/services/corona.service';
import { fadeInOnEnterAnimation } from 'angular-animations'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations : [
    fadeInOnEnterAnimation({delay : 2000})
  ]
})
export class HomeComponent implements OnInit {

  total : Number
  discharged : Number
  Deaths : Number




  constructor(
    private corona : CoronaService,

  ) {
  }



  ngOnInit(): void {
    this.corona.getData().subscribe(data => {
      this.total = data.data.summary.total,
      this.discharged = data.data.summary.discharged,
      this.Deaths = data.data.summary.deaths
    })

  }


}

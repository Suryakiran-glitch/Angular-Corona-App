import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable  } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor(
    private http : HttpClient
  ) { }

  getData() : Observable<any> {
    const url = "https://api.rootnet.in/covid19-in/stats/latest"
    return this.http.get<any>(url)
  }

}

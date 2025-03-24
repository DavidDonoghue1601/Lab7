import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //importing the HTTPClient
import { Observable } from 'rxjs'; // importing Observable

@Injectable({
  providedIn: 'root'
  
})
export class MovieService {

  //adding private httpClient to my constructor
  constructor(private httpClient:HttpClient) { } 


  //method that returns type observable
  getMovieData():Observable<any>{
    return this.httpClient.get('https://www.omdbapi.com/?apikey=2ee2ed84&s=%27war%27');
  }


}



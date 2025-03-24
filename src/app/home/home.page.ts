import { Component,OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie.service'; //importing movieservice
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, CommonModule, IonHeader, IonToolbar, IonTitle, IonContent,],
})
export class HomePage implements OnInit{
  myMovies:any[]=[];
  //adding movieservice into our constructor
  constructor(private movieService:MovieService) {}
  ngOnInit(): void {
    this.movieService.getMovieData().subscribe(
      (data)=>{
        this.myMovies = data.Search;
      }
    );
  }
}

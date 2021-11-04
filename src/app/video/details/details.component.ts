import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actor } from 'src/app/models/actor';
import { Film } from 'src/app/models/film';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  films: Film = {} as Film;
  actors: Actor[] = [];

  constructor(

    private service: VideoService,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {

    // Je recupere le dernier element apres le slash de l'URL.
    // ici on appelle la methode getFilmsDetail des service afin de souscrire et nous afficher 
    // le detail du film
    this.service.getFilmsDetail(this.route.snapshot.url[1].path)
      .subscribe(film => {
        console.log(film)
        console.log(film['actorList'])
          this.films = film;
          this.actors = film['actorList']


    })
  }


}
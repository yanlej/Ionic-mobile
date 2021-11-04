import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actor } from '../models/actor';
import { ActorsService } from './actors.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.page.html',
  styleUrls: ['./actors.page.scss'],
})
export class ActorsPage implements OnInit {

  actors: Actor[] = [];
  searchTerm: string;

  constructor(

    private service: ActorsService,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {

  }

  searchBarActeur(event){

    // Nous recuperons la valeur de l'input de la barre de recherche

    var value = event.target.value

    // Nous lui mettons une condition que si la value est vide il ne requette pas.

    if(value != ''){

      // On subscribe le results de la liste de films observable en fonction du titre

      this.service.getActors(value)

        .subscribe((request)=>{

           // ici on retourne la liste de films de l'objet

        // qui se trouve dans le tableau 'results'

          this.actors = request['results']

            console.log(request)

      })

    }

  }

}

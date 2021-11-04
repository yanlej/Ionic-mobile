import { Component, OnInit } from '@angular/core';
import { VideoService } from './video.service';
import { Film } from '../models/film';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {

  films: Film[] = [];
  searchTerm: string;

  constructor(

    /**
     * On injecte notre Service pour avoir accés au méthode qui envoyent les requêtes
     */
    private service: VideoService
    
  ) { }

  ngOnInit() {

    /**
     * Méthode qui permet d'afficher ma liste de films
     */
    this.service.getFilms()
    // je souscrit à mon observable pour voir le changement d'état
    .subscribe(f => {
      /**
       * je stock le résultat de la requête "f" dans ma liste de video declaré dans la zone de déclaration
       * Ici on met f['items'] car la requête nous renvoie 2 tableaux et que le resultat que l'on souhaite et dans le tableau "items"
       */
      this.films = f['items'];

    })
  }

  

}

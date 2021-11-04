import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../models/film';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

 

  constructor(

    private http: HttpClient

  ) {

   }

   /**
    * Méthode qui récupére la liste de films demandé par la requête
    * @returns nous retourne la liste des films demandés
    */
   getFilms(): Observable<Film[]> {

      return this.http.get<Film[]>('https://imdb-api.com/fr/API/Top250TVs/k_qm934jcf');

   }

   getFilmsDetail(idURL: string): Observable<Film>
  {
    return this.http.get<Film>(`https://imdb-api.com/fr/API/Title/k_qm934jcf/${idURL}`)
  }

}

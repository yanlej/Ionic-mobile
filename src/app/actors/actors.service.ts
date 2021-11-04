import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actor } from '../models/actor';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  

  constructor(

    private http: HttpClient

  ) { }

  /**
    * Méthode qui récupére la liste des acteurs demandé par la requête
    * @returns nous retourne la liste des acteurs demandés
    */
   getActors(name: string): Observable<Actor[]> {

    return this.http.get<Actor[]>(`https://imdb-api.com/fr/API/SearchName/k_qm934jcf/${name}`);

  }

  getActorId(id: string): Observable<Actor> {

    return this.http.get<Actor>(`https://imdb-api.com/en/API/Name/k_qm934jcf/${id}`);
    
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actor } from 'src/app/models/actor';
import { Film } from 'src/app/models/film';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  actor: Actor = {} as Actor;
  films: Film[] = [];

  constructor(

    private service: ActorsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.service.getActorId(this.route.snapshot.url[1].path)

      .subscribe((actor) => {

        console.log(actor)

          this.actor = actor;

          this.films = actor['knownFor'];

      })

  }

}

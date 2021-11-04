import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActorsPageRoutingModule } from './actors-routing.module';

import { ActorsPage } from './actors.page';
import { DetailsComponent } from './details/details.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActorsPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [
    ActorsPage,
    DetailsComponent
  ]
})
export class ActorsPageModule {}

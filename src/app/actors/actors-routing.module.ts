import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActorsPage } from './actors.page';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: '',
    component: ActorsPage
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActorsPageRoutingModule {}

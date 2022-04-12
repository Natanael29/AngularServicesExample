import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharacterComponent } from './character/character.component';
import { EpisodeComponent } from './episode/episode.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'characters', component: CharacterComponent },
  { path: 'episodes', component: EpisodeComponent },
  { path: 'locations', component: LocationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

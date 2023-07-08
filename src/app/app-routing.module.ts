import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeComponent } from './anime/anime.component';
import { FormComponent } from './form/form.component';
import { MockComponent } from './mock/mock.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'anime', component: AnimeComponent },
  { path: 'form', component: FormComponent },
  { path: 'mock', component: MockComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

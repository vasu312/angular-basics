import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeComponent } from './components/anime/anime.component';
import { FormComponent } from './form/form.component';
import { MockComponent } from './mock/mock.component';
import { HomeComponent } from './home/home.component';
import { CssComponent } from './css/css.component';
import { WeatherComponent } from './weather/weather.component';
import { CrudComponent } from './crud/crud.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'anime', component: AnimeComponent },
  { path: 'form', component: FormComponent },
  { path: 'mock', component: MockComponent },
  { path: 'css', component: CssComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'crud', component: CrudComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './services/info.service';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AnimeComponent } from './components/anime/anime.component';
import { MockComponent } from './components/mock/mock.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { CssComponent } from './components/css/css.component';
import { WeatherComponent } from './components/weather/weather.component';
import { CrudComponent } from './components/crud/crud.component';
import { CrudapiService } from './services/crudapi.service';

@NgModule({
  declarations: [
    AppComponent,
    AnimeComponent,
    MockComponent,
    FormComponent,
    HomeComponent,
    CssComponent,
    WeatherComponent,
    CrudComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [ApiService ,CrudapiService],
  bootstrap: [AppComponent],
})
export class AppModule {}

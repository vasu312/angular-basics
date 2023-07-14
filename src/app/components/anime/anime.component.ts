import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/info.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css'],
})
export class AnimeComponent {
  animedata: any = [];
  animeActive: boolean = true;
  constructor(private apiService: ApiService) {}
  showAnime() {
    this.animeActive = true;
    this.apiService.getanimeData().subscribe((dev) => {
      this.animedata = dev;
    });
  }
  hideAnime() {
    this.animeActive = false;
  }
}

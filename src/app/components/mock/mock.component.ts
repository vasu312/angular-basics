import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/info.service';

@Component({
  selector: 'app-mock',
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.css'],
})
export class MockComponent {
  data: any = [];
  isActive = true;

  constructor(private apiService: ApiService) {}

  hideData() {
    this.isActive = false;
  }

  showData() {
    this.isActive = true;
    this.apiService.getData().subscribe(
      (x) => {
        this.data = x;
      },
      (error: any) => {
        console.log('Api is not Active. Please run the Mock API');
      }
    );
  }
}

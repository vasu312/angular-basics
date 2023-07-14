import { Component } from '@angular/core';
import { CrudapiService } from 'src/app/services/crudapi.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent {
  constructor(private crudApi: CrudapiService) {}
}

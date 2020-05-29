import { Component, OnInit } from '@angular/core';
import { HttpDataService } from '../services/http-data.service';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss']
})
export class CardsContainerComponent implements OnInit {

  constructor(private dataService: HttpDataService) { }

  data$: Observable<string> = this.dataService.getConfig();

  ngOnInit() {

    this.data$.pipe(
      filter(data => !data)
    );

  }
}

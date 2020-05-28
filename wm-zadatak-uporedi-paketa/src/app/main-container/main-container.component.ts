import { Component, OnInit } from '@angular/core';
import { HttpDataService } from '../services/http-data.service';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  constructor(private dataService: HttpDataService) { }

  data$: Observable<string> = this.dataService.getConfig();

  ngOnInit() {

    this.data$.pipe(
      filter(data => !data)
    );

  }

}

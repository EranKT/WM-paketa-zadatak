import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpDataService } from '../services/http-data.service';
import { Observable } from 'rxjs';
import { filter, map, take, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss']
})
export class CardsContainerComponent implements OnInit, OnDestroy {

  isAlive = true;

  constructor(private dataService: HttpDataService) { }

  data$: Observable<any> = this.dataService.getConfig();

  preselectedContractLength$: Observable<string> = this.data$.pipe(
    map(data => data.contract_length.preselected_contract_length)
  );

  ngOnInit() {

    this.data$.pipe(
      filter(data => !data),
      takeWhile(_ => !!this.isAlive),
      take(1)
    ).subscribe();

    this.preselectedContractLength$.pipe(
      filter(data => !data),
      takeWhile(_ => !!this.isAlive),
      take(1)
    ).subscribe();
  }

  ngOnDestroy() {
    this.isAlive = false;
  }
}

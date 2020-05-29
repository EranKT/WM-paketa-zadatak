import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpDataService } from '../services/http-data.service';
import { Observable } from 'rxjs';
import { filter, map, take, takeWhile, tap } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss']
})
export class CardsContainerComponent implements OnInit, OnDestroy {

  isAlive = true;

  constructor(private dataService: HttpDataService) { }

  data$: Observable<any> = this.dataService.getConfig();

  contractLengthOptions$: Observable<string[]> = this.data$.pipe(
    map(data => data.contract_length.contract_length_options),
    tap(types => console.log(types))
  );

  preselectedContractLength$: Observable<string> = this.data$.pipe(
    map(data => data.contract_length.preselected_contract_length)
  );


  selectedLength = null;
  get selectedContractLength() { return this.selectedLength; }

  form = new FormGroup({
    contractLength: new FormControl('', Validators.required)
  });

  changeContractLength(length) {
    this.selectedLength = length.target.value;
  }

  ngOnInit() {

    this.data$.pipe(
      filter(data => !data),
      takeWhile(_ => !!this.isAlive),
      take(1)
    ).subscribe();

    this.preselectedContractLength$.pipe(
      filter(data => !data),
      takeWhile(_ => !!this.isAlive),
      take(1),
      tap(data => this.selectedLength = data)
    ).subscribe();
  }

  ngOnDestroy() {
    this.isAlive = false;
  }
}

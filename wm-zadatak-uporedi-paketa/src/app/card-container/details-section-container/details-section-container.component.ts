import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details-section-container',
  templateUrl: './details-section-container.component.html',
  styleUrls: ['./details-section-container.component.scss']
})
export class DetailsSectionContainerComponent implements OnInit {

  @Input() included: any = null;
  @Input() productCategory: string = null;

  constructor() { }

  ngOnInit() {
  }

}

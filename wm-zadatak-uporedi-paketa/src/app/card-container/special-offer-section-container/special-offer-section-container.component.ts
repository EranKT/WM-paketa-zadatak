import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-special-offer-section-container',
  templateUrl: './special-offer-section-container.component.html',
  styleUrls: ['./special-offer-section-container.component.scss']
})
export class SpecialOfferSectionContainerComponent implements OnInit {

  @Input() promotions: any = null;

  constructor() { }

  ngOnInit() {
  }

  cleanPromoText(text: string) {
    let cleanText = text.slice(0, text.length - 4);
    cleanText = cleanText.slice(3, cleanText.length);
    return cleanText;
  }

}

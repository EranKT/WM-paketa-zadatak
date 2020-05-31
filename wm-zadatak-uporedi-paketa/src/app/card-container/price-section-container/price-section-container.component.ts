import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price-section-container',
  templateUrl: './price-section-container.component.html',
  styleUrls: ['./price-section-container.component.scss']
})
export class PriceSectionContainerComponent implements OnInit {

  @Input() prices: any = null;
  @Input() selectedContractLength: string;

  get filteredPrices() {

    return {
      oldPriceRecurring: Object.keys(this.prices.old_price_recurring).
        filter(contractLength => contractLength === this.selectedContractLength).
        map(contractLength => {
          const index = this.prices.old_price_recurring[contractLength].indexOf('.');
          const price = this.prices.old_price_recurring[contractLength].slice(0, index);
          return price;
        }),
      priceRecurring: Object.keys(this.prices.price_recurring).
        filter(contractLength => contractLength === this.selectedContractLength).
        map(contractLength => {
          const index = this.prices.price_recurring[contractLength].indexOf('.');
          const price = this.prices.price_recurring[contractLength].slice(0, index);
          return price;
        }),
      oldPricePromoText: this.cleanPromoText(this.prices.old_price_promo_text)
    };
  }

  constructor() { }

  ngOnInit() {
  }

  cleanPromoText(text: string) {
    let cleanText = text.slice(0, text.length - 4);
    cleanText = cleanText.slice(3, cleanText.length);
    return cleanText;
  }

  priceText(price): string {
    const priceText = `${price} ${+price > 0 ? 'rsd/mes.' : ''}`;
    return priceText;
  }

}

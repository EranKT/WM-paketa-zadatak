import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit {

  @Input() item: any = null;
  @Input() items: any = null;
  @Input() promoText: any = null;

  @Input() selectedContractLength: string;

  get includePromotion() {
    return this.item.promotions.
      map(promotions => promotions.discount_variations.includes(this.selectedContractLength))[0];
  }

  get isRecommended() { return this.item.is_featured; }

  get tvSectionHight() {
    let noOfLines;
    let maxLines = 0;
    this.items.forEach(item => {
      noOfLines = item.included.filter(include => include.product_category === 'tv');
      if (noOfLines.length > maxLines) { maxLines = noOfLines.length; }
    });
    return maxLines;
  }

  get netSectionHight() {
    let noOfLines;
    let maxLines = 0;
    this.items.forEach(item => {
      noOfLines = item.included.filter(include => include.product_category === 'net');
      if (noOfLines.length > maxLines) { maxLines = noOfLines.length; }
    });
    return maxLines;
  }

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details-section-container',
  templateUrl: './details-section-container.component.html',
  styleUrls: ['./details-section-container.component.scss']
})
export class DetailsSectionContainerComponent implements OnInit {

  @Input() included: any[] = null;
  @Input() productCategory: string = null;
  @Input() sectionHeight = 0;

  get categoryImage() {
    return this.included.filter(include => include.product_category === this.productCategory)[0].category_gallery;
  }

  get updatedIncludedArray() { return this.included.filter(include => include.product_category === this.productCategory); }

  get sectionHeigh() { return `height: ${1.3 * (this.sectionHeight + 2)}em;`; }

  constructor() { }

  ngOnInit() {
  }

}

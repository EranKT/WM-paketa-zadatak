import { PricesModel } from './price-section.model';
import { DetailsModel } from './details-section.model';

export class CardData {
  title: string;
  promoText: string;
  contractLength: {
    contract_length_options: [string];
    preselected_contract_length: string;
  };
  assets: {
    net_category: string;
    tv_category: string;
  };
  items: [
    {
      id: number;
      name: string;
      prices: PricesModel;
      isFeatured: boolean;
      promotions: [
        {
          id: number;
          promoText: string;
          discount_variations: [string];
          promotion_image: string;
        }
      ],
      included: [DetailsModel]
    }
  ];
}

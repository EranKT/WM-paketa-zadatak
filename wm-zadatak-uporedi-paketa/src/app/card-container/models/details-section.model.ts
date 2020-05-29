export class DetailsModel {
  id: number;
  longName: string;
  productCategory: string;
  categoryGallery: string;
  attributes: {
    attribute_id: number;
    attribute_value: string;
  };
}

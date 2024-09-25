import { Component, Input } from '@angular/core';
import { IProduct } from '../catalogue/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;

  getImageUrl(product: IProduct) {
    return '/assets/images/robot-parts/' + product.imageName;
  }
  getDiscountedClasses(product: IProduct) {
    if (product.discount > 0) return ['strikethrough'];
    else return [];
  }

  addToCart(product: IProduct) {}
}

import { Component } from '@angular/core';
import { IProduct } from '../catalogue/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  getImageUrl(product: IProduct) {
    return '/assets/images/robot-parts/' + product.imageName;
  }
}

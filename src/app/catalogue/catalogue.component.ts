import { Component, inject } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'bot-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent {
  products: any;
  filter: string = '';
  // private cartSvc: CartService = inject(CartService);

  constructor(private cartSvc: CartService) {}

  addToCart(product: IProduct) {
    this.cartSvc.add(product);
  }

  // getDiscountedClasses(product: IProduct) {
  //   if (product.discount > 0) return ['strikethrough'];
  //   else return [];
  // }

  getFilterProducts() {
    return this.filter === ''
      ? this.products
      : this.products.filter(
          (product: IProduct) => product.category === this.filter
        );
  }
}

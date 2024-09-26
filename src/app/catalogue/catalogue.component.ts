import { Component, inject } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bot-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent {
  products: any;
  filter: string = '';
  // private cartSvc: CartService = inject(CartService);

  constructor(
    private cartSvc: CartService,
    private productSvc: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    this.productSvc.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  addToCart(product: IProduct) {
    this.cartSvc.add(product);
    this.router.navigate(['/cart']);
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

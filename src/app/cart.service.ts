import { Injectable } from '@angular/core';
import { IProduct } from './catalogue/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: IProduct[] = [];

  constructor() {}
}

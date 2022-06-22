import { Injectable } from '@angular/core';
import { Book } from 'src/app/Models/Book';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartStorage: Book[] = [];
  constructor() {}

  getCartStorage() {
    return this.cartStorage;
  }
}

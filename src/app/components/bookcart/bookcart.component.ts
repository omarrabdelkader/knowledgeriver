import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Models/Book';
import { CartService } from 'src/app/Services/CartService/cart.service';

@Component({
  selector: 'app-bookcart',
  templateUrl: './bookcart.component.html',
  styleUrls: ['./bookcart.component.css'],
})
export class BookcartComponent implements OnInit {
  cartStorage: Book[] = [];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartStorage = this.cartService.getCartStorage();
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/Models/Book';
import { CartService } from 'src/app/Services/CartService/cart.service';

@Component({
  selector: 'app-bookview',
  templateUrl: './bookview.component.html',
  styleUrls: ['./bookview.component.css'],
})
export class BookviewComponent implements OnInit {
  @Input() singleBook: Book = {
    id: 1,
    title: '',
    description: '',
    author: '',
    img: '',
    genre: '',
  };

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  AddCart(singleBook: Book) {
    this.cartService.getCartStorage().push(singleBook);
    window.alert(`${singleBook.title} has been added to your cart!`);
  }
}

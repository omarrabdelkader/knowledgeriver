export class Book {
  id: number;
  img: string;
  title: string;
  author: string;
  description: string;
  genre: string;
  quantity: number;
  price: number;

  constructor() {
    this.id = 1;
    this.img = '';
    this.genre = '';
    this.title = '';
    this.author = '';
    this.description = '';
    this.quantity = 1;
    this.price = 1;
  }
}

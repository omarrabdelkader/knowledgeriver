export class Book {
  id: number;
  img: string;
  title: string;
  author: string;
  description: string;
  genre: string;

  constructor() {
    this.id = 1;
    this.img = '';
    this.genre = '';
    this.title = '';
    this.author = '';
    this.description = '';
  }
}

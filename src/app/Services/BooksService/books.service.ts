import { Injectable } from '@angular/core';
import { Book } from 'src/app/Models/Book';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  books: Book[] = [
    {
      id: 1,
      title: 'Crime and Punishment',
      img: 'https://i.ibb.co/fDgwjj7/17879.jpg',
      author: 'Fyodor Dostoevsky',
      description: '',
      genre: 'Philosophical Fiction',
    },
    {
      id: 2,
      title: 'رواية الفلسفة',
      img: 'https://i.ibb.co/f8RMGtF/6e39c8104222625-5f5e8a329447a.png',
      author: 'ويل ديورنت',
      description: '',
      genre: 'Biography',
    },
    {
      id: 3,
      title: 'The Stranger',
      img: 'https://i.ibb.co/kmzWDFf/49552-SY475.jpg',
      author: 'Albert Camus',
      description: '',
      genre: 'Philosophical Fiction',
    },
    {
      id: 4,
      title: 'Les Misérables',
      img: 'https://i.ibb.co/ZXKw3nS/81-SGVha-L-d-L.jpg',
      author: 'Victor Hugo',
      description: '',
      genre: 'Historical Fiction',
    },
    {
      id: 5,
      title: 'War and Peace',
      img: 'https://i.ibb.co/1vKSVJx/A1a-Db5-U5my-L.jpg',
      author: 'Leo Tolstoy',
      description: '',
      genre: 'Historical Fiction',
    },
    {
      id: 6,
      title: 'هكذا تكلم زرادشت',
      img: 'https://i.ibb.co/Y2Y2zSS/156030.jpg',
      author: 'نيتشة',
      description: '',
      genre: 'Philosophical Fiction',
    },
    {
      id: 7,
      title: 'Hamlet',
      img: 'https://i.ibb.co/09w0kYy/9780867090192.jpg',
      author: 'Shakespeare',
      description:
        "Hamlet is melancholy, bitter, and cynical, full of hatred for his uncle's scheming and disgust for his mother's sexuality. A reflective and thoughtful young man who has studied at the University of Wittenberg, Hamlet is often indecisive and hesitant, but at other times prone to rash and impulsive acts.",
      genre: 'Drama',
    },
    {
      id: 8,
      title: 'Critique of Pure Reason',
      img: 'https://i.ibb.co/fFSWy4F/Critique-of-pure-reason-by-immanuel-kant.jpg',
      author: 'Immanuel Kant',
      description:
        'The Critique of Pure Reason was a critique of the pretensions of pure theoretical reason to attain metaphysical truths beyond the ken of applied theoretical reason. Its conclusion was that pure theoretical reason must be restrained, because it produces confused arguments when applied outside its sphere.',
      genre: 'Non-Fiction',
    },
    {
      id: 9,
      title: 'Story of Philosophy',
      img: 'https://i.ibb.co/4mwZ77P/51jp-KEy4p-CL.jpg',
      author: 'Will Durrant',
      description:
        "Durant writes the Story of Philosophy to provide a personal dimension to the study of philosophy. The author's goal for the book is to humanize the knowledge of speculative thought via selected dominant philosophers. He writes as an objective historian of personal facts, stories and philosophies of these philosophers.",
      genre: 'Biography',
    },
    {
      id: 10,
      title: 'العقل والوجود',
      img: 'https://i.ibb.co/30Jd2Mh/148202.jpg',
      author: 'يوسف كرم',
      description:
        'ول كتاب له عن أفكاره هو لا عن أفكار الفلاسفة التي شغل بها من قبل. وتحدث فيه عن وجود العقل ونقد العقل ومشكلات الشك واليقين والعقل وما بعد الطبيعة والحق والباطل والمقارنة بين المعنى والصورة ورفض ما يراه "الحسيون" من إنكار وجود المعاني والاختصار على الحسيات، وناقش حجج الشكاك منذ فلاسفة اليونان حتى عصرنا الحاضر ودافع عن الحقيقة لأن وجود الخطأ دليل على وجود الحقيقة. ويدافع عن علم ما بعد الطبيعة وهو ضروري لأنه كلي وأوضح "كرم " أن مذهبة الفلسفي يتسم باليقين والإيمان.',
      genre: 'Philosophical Non-Fiction',
    },
    {
      id: 11,
      title: 'The Alchemist',
      img: 'https://i.ibb.co/wB6g7LR/25076674-SY475.jpg" alt="25076674-SY475',
      author: 'Pauolo Cohelo',
      description:
        'The Alchemist is a classic novel in which a boy named Santiago embarks on a journey seeking treasure in the Egyptian pyramids after having a recurring dream about it and on the way meets mentors, falls in love, and most importantly, learns the true importance of who he is and how to improve himself.',
      genre: 'Philosophical Fiction',
    },
    {
      id: 12,
      title: 'The House of the Dead',
      img: 'https://i.ibb.co/Y3CTPM6/6c4e342f-b13a-47d9-8058-481fc0159e2d-df5480b679be6c60cdea4ac591c2f43e.jpg',
      author: 'Fyodor Dostoevsky',
      description:
        'The novel portrays the life of convicts in a Siberian prison camp. It is generally considered to be a fictionalised memoir; a loosely-knit collection of experiences, events and philosophical discussion',
      genre: 'Philosophical Fiction',
    },
  ];
  constructor() {}
  GetBooks() {
    return this.books;
  }
}

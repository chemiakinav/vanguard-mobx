import { flow, makeAutoObservable } from 'mobx'

import { BookType } from '../types/bookType';

export class Book {
  book = {} as BookType
  state: string = 'pending'

  constructor() {
    makeAutoObservable(this, {
      fetchBook: flow
    })
  }

  *fetchBook(bookId: string) {
    this.state = 'pending'
    try {
      const response = yield fetch(`https://openlibrary.org/books/${bookId}.json`).then(response => response.json())
      this.state = 'done'
      this.book = response
    } catch (error) {
      this.state = 'error'
    }
  }

  clearBook() {
    this.book = {} as BookType
  }
}

export const BookStore = new Book()

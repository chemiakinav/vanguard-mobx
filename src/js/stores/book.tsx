import { flow, makeAutoObservable } from 'mobx'


export class Book {
  title: string = ''
  covers: string[] = []
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
      this.title = response.title
      this.covers = response.covers
    } catch (error) {
      this.state = 'error'
    }
  }
}

export const BookStore = new Book()

import { flow, makeAutoObservable } from 'mobx'

import { BookType } from '../types/bookType';

export class Library {
  libraryBooks: BookType[] = []
  state: string = 'pending'

  constructor() {
    makeAutoObservable(this, {
      fetchBooks: flow
    })
  }

  *fetchBooks() {
    this.libraryBooks = []
    this.state = 'pending'
    try {
      const response = yield fetch('http://openlibrary.org/people/george08/lists/OL97L/seeds.json').then(response => response.json())
      this.state = 'done'
      this.libraryBooks = response.entries
    } catch (error) {
      this.state = 'error'
    }
  }
}

export const LibraryStore = new Library()

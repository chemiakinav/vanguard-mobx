import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import { flowResult } from 'mobx'
import { Library } from '../stores/library'
import { BookType } from '../types/bookType'


const BookItem = ({ book }: { book: BookType}) => (
  <div className="book-container">
    <a href={book.url} className="book-container__title">{book.title}</a>
    <div className="book-container__cover">
      <img src={book.picture.url} />
    </div>
  </div>
);

const LibraryView = observer(({ library }: { library: Library}) => {
  useEffect(() => {
    flowResult(library.fetchBooks())
  }, [])

  return (
    <div>
      <h1>library</h1>  
      {library.state !== 'pending' && library.libraryBooks.map(book => <BookItem book={book} key={book.url} />)}
    </div>
  )
})

export default LibraryView
import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import { useParams } from 'react-router-dom'
import { Book } from '../stores/book'


const BookView = observer(( { book } : { book: Book}) => {
  let { bookId } = useParams<{bookId: string}>();
  useEffect(() => {
    book.fetchBook(bookId)
  }, [])
  const coverPath = (id: string) => `https://covers.openlibrary.org/b/id/${id}-M.jpg`
  return (
    <div>
      <h1>Book</h1>
      {book.state !== 'pending' && (
        <>
          <div className="book-page__title">{book.title}</div>
          <div className="book-page__cover">
            <img src={coverPath(book.covers[0])} />
          </div>
        </>
      )}
    </div>
  )
})

export default BookView
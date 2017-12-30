import React from 'react'
import BooksShelf from './books/BooksShelf'
import shelfCategory from '../utils/BooksCategoryAPI'
import PropTypes from 'prop-types'

const MyBooks = props => {
  const { books, handleBookUpdate } = props

  return (
    <div className="list-books-content" id="my-books">
      <BooksShelf
        books={books}
        shelfCategory={shelfCategory}
        handleBookUpdate={handleBookUpdate}
      />
    </div>
  )
}

MyBooks.propTypes = {
  books: PropTypes.array.isRequired,
  handleBookUpdate: PropTypes.func.isRequired
}

export default MyBooks

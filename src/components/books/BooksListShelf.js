import React from 'react'
import PropTypes from 'prop-types'
import BookDetails from './BookDetails'

const BooksListShelf = props => {
  const { shelfCategory, shelfBooks, handleBookUpdate } = props

  return (
    <div className="bookshelf-books" id="books-list">
      <ol className="books-grid">
        {shelfBooks.length > 0 && shelfBooks.map((book) => book.shelf === shelfCategory && (
          <BookDetails
            key={book.id}
            book={book}
            handleBookUpdate={handleBookUpdate}
          />
        ))}
      </ol>
    </div>
  )
}

BooksListShelf.propTypes = {
  shelfCategory: PropTypes.string,
  shelfBooks: PropTypes.array.isRequired,
  handleBookUpdate: PropTypes.func.isRequired
}

export default BooksListShelf

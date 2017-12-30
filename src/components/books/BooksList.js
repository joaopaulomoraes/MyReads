import React from 'react'
import PropTypes from 'prop-types'
import BookDetails from './BookDetails'

const BooksList = props => {
  const { shelfBooks, handleBookUpdate } = props

  return (
    <div className="bookshelf-books" id="books-list">
      <ol className="books-grid">
        {shelfBooks.length > 0 && shelfBooks.map(book => (
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

BooksList.propTypes = {
  shelfBooks: PropTypes.array.isRequired,
  handleBookUpdate: PropTypes.func.isRequired
}

export default BooksList

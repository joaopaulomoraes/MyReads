import React from 'react'
import BooksListShelf from './BooksListShelf'
import PropTypes from 'prop-types'

const BooksShelf = props => {
  const { books, shelfCategory, handleBookUpdate } = props

  return (
    <div className="bookshelf">
      {shelfCategory.map((shelf) => (
        <div key={shelf.id}>
          <h2 className="bookshelf-title">{shelf.title}</h2>
          <BooksListShelf
            shelfCategory={shelf.value}
            shelfBooks={books}
            handleBookUpdate={handleBookUpdate}
          />
        </div>
      ))}
    </div>
  )
}

BooksShelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelfCategory: PropTypes.array.isRequired,
  handleBookUpdate: PropTypes.func.isRequired
}

export default BooksShelf

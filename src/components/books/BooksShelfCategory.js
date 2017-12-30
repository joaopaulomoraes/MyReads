import React from 'react'
import booksCategory from '../../utils/BooksCategoryAPI'
import PropTypes from 'prop-types'

const BooksShelfCategory = props => {
  const { book, handleBookUpdate } = props

  return (
    <div className="book-shelf-changer" id="books-category">
      <select value={book.shelf} onChange={(e) => handleBookUpdate(book, e.target.value)}>
        <option disabled>Move to...</option>
        {booksCategory.map((shelf) => (
          <option
            key={shelf.id}
            value={shelf.value}
          >{shelf.title}</option>
        ))}
        <option value="none">None</option>
      </select>
    </div>
  )
}

BooksShelfCategory.propType = {
  book: PropTypes.object.isRequired,
  handleBookUpdate: PropTypes.func.isRequired
}

export default BooksShelfCategory

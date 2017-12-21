import React, { Component } from 'react'
import booksCategory from '../../utils/BooksCategoryAPI'
import PropTypes from 'prop-types'

class BooksShelfCategory extends Component {
  static propType = {
    book: PropTypes.object.isRequired,
    handleBookUpdate: PropTypes.func.isRequired
  }

  render() {
    const { book, handleBookUpdate } = this.props

    return (
      <div className="book-shelf-changer" id="books-category">
        <select value={book.shelf ? book.shelf : 'none'} onChange={(e) => handleBookUpdate(book, e.target.value)}>
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
}

export default BooksShelfCategory

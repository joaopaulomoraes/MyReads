import React, { Component } from 'react'
import BooksShelf from './books/BooksShelf'
import shelfCategory from '../utils/BooksCategoryAPI'
import PropTypes from 'prop-types'

class MyBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    handleBookUpdate: PropTypes.func.isRequired
  }

  render() {
    const { books, handleBookUpdate } = this.props

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
}

export default MyBooks

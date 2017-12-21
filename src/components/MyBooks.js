import React, { Component } from 'react'
import BooksShelf from './books/BooksShelf'
import shelfCategory from '../utils/BooksCategoryAPI'
import PropTypes from 'prop-types'

class MyBooks extends Component {
  static propTypes = {
    handleBookUpdate: PropTypes.func.isRequired
  }

  render() {
    const { handleBookUpdate } = this.props

    return (
      <div className="list-books-content" id="my-books">
        <BooksShelf
          shelfCategory={shelfCategory}
          handleBookUpdate={handleBookUpdate}
        />
      </div>
    )
  }
}

export default MyBooks

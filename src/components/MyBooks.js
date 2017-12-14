import React, { Component } from 'react'
import BooksShelf from './books/BooksShelf'
import shelfCategory from '../utils/BooksCategoryAPI'

class MyBooks extends Component {
  render() {
    return (
      <div className="list-books-content" id="my-books">
        <BooksShelf shelfCategory={shelfCategory} />
      </div>
    )
  }
}

export default MyBooks

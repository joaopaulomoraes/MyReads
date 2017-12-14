import React, { Component } from 'react'
import BooksShelfCategory from './BooksShelfCategory'

class BooksList extends Component {
  render() {
    return (
      <div className="bookshelf-books" id="books-list">
        <ol className="books-grid">
          <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover">

                </div>
                <BooksShelfCategory />
              </div>
              <div className="book-title">Book title</div>
              <div className="book-authors">Book author</div>
            </div>
          </li>
        </ol>
      </div>
    )
  }
}

export default BooksList

import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import BooksShelfCategory from './BooksShelfCategory'
import PropTypes from 'prop-types'
import noBookCover from '../../icons/noBookCover.jpg'

class BooksList extends Component {
  static propTypes = {
    shelfCategory: PropTypes.string,
    shelfBooks: PropTypes.array.isRequired
  }

  /**
   * @description Checks if there is a cover in the book and assigns a default image if it does not exist
   * @param {object} bookCover
   * @returns {bookCover} A cover book image for book
   * @memberof BooksList
   */
  hasBookCover = (bookCover) => {
    return (bookCover !== undefined) ? bookCover.thumbnail : noBookCover
  }

  render() {
    let { shelfCategory, shelfBooks } = this.props

    return (
      <div className="bookshelf-books" id="books-list">
        <ol className="books-grid">
        {shelfBooks.length > 0 && shelfBooks.map((book) => book.shelf === shelfCategory && (
          <CSSTransitionGroup
            transitionName="books-transition"
            transitionAppear={true}
            transitionAppearTimeout={500}
          >
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: '100%',
                    backgroundImage: `url(${this.hasBookCover(book.imageLinks)})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#ffeb3b',
                    backgroundPosition: 'center'
                  }}>
                </div>
                <BooksShelfCategory />
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>
            </div>
          </li>
          </CSSTransitionGroup>
        ))}
        </ol>
      </div>
    )
  }
}

export default BooksList

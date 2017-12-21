import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import BooksShelfCategory from './BooksShelfCategory'
import PropTypes from 'prop-types'
import noBookCover from '../../icons/noBookCover.jpg'
import ReactStars from 'react-stars'

class BooksList extends Component {
  static propTypes = {
    shelfCategory: PropTypes.string,
    shelfBooks: PropTypes.array.isRequired,
    handleBookUpdate: PropTypes.func.isRequired
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
    const { shelfCategory, shelfBooks, handleBookUpdate } = this.props

    return (
      <div className="bookshelf-books" id="books-list">
        <ol className="books-grid">
        {shelfBooks.length > 0 && shelfBooks.map((book) => book.shelf === shelfCategory && (
          <ReactCSSTransitionGroup
            transitionName="books-transition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}
            key={book.id}
          >
          <li>
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
                <BooksShelfCategory
                  book={book}
                  handleBookUpdate={handleBookUpdate}
                />
              </div>
              <div style={{ marginTop: 15 }}>
                <ReactStars
                  count={5}
                  color1={'#999'}
                  value={book.ratingsCount}
                  size={22}
                  color2={'#ffeb3b'}
                  edit={false}
                />
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors.length > 1 ? book.authors.join(', ') : book.authors}</div>
            </div>
          </li>
          </ReactCSSTransitionGroup>
        ))}
        </ol>
      </div>
    )
  }
}

export default BooksList

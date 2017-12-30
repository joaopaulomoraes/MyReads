import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import BooksShelfCategory from './BooksShelfCategory'
import PropTypes from 'prop-types'
import noBookCover from '../../icons/noBookCover.jpg'
import ReactStars from 'react-stars'

const BookDetails = props => {
  /**
   * @description Checks if there is a cover in the book and assigns a default image if it does not exist
   * @param {object} bookCover
   * @returns {bookCover} A cover book image for book
   * @memberof BookDetails
   */
  const hasBookCover = (bookCover) => {
    return (bookCover !== undefined) ? bookCover.thumbnail : noBookCover
  }

  const { book, handleBookUpdate } = props

  return (
    <div>
      <ReactCSSTransitionGroup
        transitionName="books-transition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover"
              style={{
                width: 128,
                height: '100%',
                backgroundImage: `url(${hasBookCover(book.imageLinks)})`,
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
    </div>
  )
}

BookDetails.propTypes = {
  book: PropTypes.object.isRequired,
  handleBookUpdate: PropTypes.func.isRequired
}

export default BookDetails

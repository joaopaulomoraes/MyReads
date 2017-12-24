import React, { Component } from 'react'
import BooksList from './BooksList'
import PropTypes from 'prop-types'

class BooksShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelfCategory: PropTypes.array.isRequired,
    handleBookUpdate: PropTypes.func.isRequired
  }

  render() {
    const { books, shelfCategory, handleBookUpdate } = this.props

    return (
      <div className="bookshelf">
        {shelfCategory.map((shelf) => (
          <div key={shelf.id}>
            <h2 className="bookshelf-title">{shelf.title}</h2>
            <BooksList
              shelfCategory={shelf.value}
              shelfBooks={books}
              handleBookUpdate={handleBookUpdate}
            />
          </div>
        ))}
      </div>
    )
  }
}

export default BooksShelf

import React, { Component } from 'react'
import BooksList from './BooksList'
import PropTypes from 'prop-types'
import * as BooksAPI from '../../utils/BooksAPI'

class BooksShelf extends Component {
  static propTypes = {
    shelfCategory: PropTypes.array.isRequired
  }

  state = {
    books: []
  }

  /**
   * @description Calls all API books and assigns state
   * @memberof BooksShelf
   */
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  /**
   * @description Updates the bookshelf
   * @param {object} book
   * @param {string} shelf
   * @returns {books}
   * @memberof BooksShelf
   */
  handleBookUpdate = (book, shelf) => {
    book.shelf = shelf
    BooksAPI.update(book, shelf).then(() => {
      this.setState((state) => ({
        books: this.state.books.filter((b) => b.id !== book.id).concat([book])
      }))
    })
  }

  render() {
    const { shelfCategory } = this.props
    let { books } = this.state

    return (
      <div className="bookshelf">
        {shelfCategory.map((shelf) => (
          <div key={shelf.id}>
            <h2 className="bookshelf-title">{shelf.title}</h2>
            <BooksList
              shelfCategory={shelf.value}
              shelfBooks={books}
              handleBookUpdate={this.handleBookUpdate}
            />
          </div>
        ))}
      </div>
    )
  }
}

export default BooksShelf

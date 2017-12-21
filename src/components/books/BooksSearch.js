import React, { Component } from 'react'
import  {Link } from 'react-router-dom'
import BooksList from './BooksList'
import * as BooksAPI from '../../utils/BooksAPI'
import { DebounceInput } from 'react-debounce-input'
import escapeStringExp from 'escape-string-regexp'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'

class BooksSearch extends Component {
  static propTypes = {
    handleBookUpdate: PropTypes.func.isRequired
  }

  state = {
    books: [],
    query: ''
  }

  /**
   * @description Queries books based on last word as a parameter
   * @param {string} title - The title of the book
   * @param {string} author - The author of the book
   * @returns {Object|Array} If set to true, the function returns an Object, if not an empty Array
   * @memberof BooksSearch
   */
  seachBooks = (word) => {
    let verifiedSearch = (word.length)
      ? BooksAPI.search(word, 20)
        .then((books) => {
          books.length > 0 ? this.setState({ books }) : books = []
        })
      : null
    this.setState({query: word, books: []})

    return verifiedSearch
  }

  render() {
    const { handleBookUpdate } = this.props
    let { books, query } = this.state

    if (books) {
      const match = new RegExp(escapeStringExp(query), 'i')
      books.filter((book) => match.test(book.title || book.author))
    }

    books.sort(sortBy('title', 'author'))

    return (
      <div className="search-books" id="books-search">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <DebounceInput
              minLength={3}
              debounceTimeout={300}
              placeholder="Search a book by title or author"
              value={query}
              onChange={(event) => this.seachBooks(event.target.value)}
              autoFocus
            />
          </div>
        </div>
        <div className="search-books-results">
          <BooksList
            shelfBooks={books}
            handleBookUpdate={handleBookUpdate}
          />
        </div>
      </div>
    )
  }
}

export default BooksSearch

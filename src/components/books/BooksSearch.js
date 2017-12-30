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
    books: PropTypes.array.isRequired,
    handleBookUpdate: PropTypes.func.isRequired
  }

  state = {
    booksSearch: [],
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
        .then((booksSearch) => {
          const { books } = this.props
          if (booksSearch.length > 0) {
            // Go through all the books and assign a shelf based on your existence
            for (const s of booksSearch) {
              s.shelf = 'none'
              for (const b of books) {
                if (s.id === b.id) {
                  s.shelf = b.shelf
                }
              }
            }
            this.setState({ booksSearch })
          }
        })
      : null
    this.setState({query: word, booksSearch: []})

    return verifiedSearch
  }

  render() {
    const { handleBookUpdate } = this.props
    let { booksSearch, query } = this.state

    if (booksSearch) {
      const match = new RegExp(escapeStringExp(query), 'i')
      booksSearch.filter((book) => match.test(book.title || book.author))
    }

    booksSearch.sort(sortBy('title', 'author'))

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
            shelfBooks={booksSearch}
            handleBookUpdate={handleBookUpdate}
          />
        </div>
      </div>
    )
  }
}

export default BooksSearch

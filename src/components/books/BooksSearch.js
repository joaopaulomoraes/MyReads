import React, { Component } from 'react'
import  {Link } from 'react-router-dom'

class BooksSearch extends Component {
  render() {
    return (
      <div className="search-books" id="books-search">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              placeholder="Search a book by title or author"
              autoFocus
            />
          </div>
        </div>
        <div className="search-books-results">

        </div>
      </div>
    )
  }
}

export default BooksSearch

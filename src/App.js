import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MyBooks from './components/MyBooks'
import MainHeader from './components/main/MainHeader'
import BooksSearch from './components/books/BooksSearch'
import AddButton from './components/main/AddButton'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'

class MyReads extends Component {
  state = {
    books: []
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
        books: this.state.books.filter((b) => b.id !== book.id).concat([book]),
        loading: false
      }))
    })
  }

  render() {
    return (
      <div className="app" id="app">
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <MainHeader />
              <MyBooks handleBookUpdate={this.handleBookUpdate} />
              <AddButton />
            </div>
          )}
        />

        <Route
          path="/search"
          render={() => (
            <BooksSearch handleBookUpdate={this.handleBookUpdate} />
          )}
        />
      </div>
    )
  }
}

export default MyReads

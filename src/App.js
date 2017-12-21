import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MyBooks from './components/MyBooks'
import MainHeader from './components/main/MainHeader'
import BooksSearch from './components/books/BooksSearch'
import AddButton from './components/main/AddButton'
import './App.css'

class MyReads extends Component {
  render() {
    return (
      <div className="app" id="app">
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <MainHeader />
              <MyBooks />
              <AddButton />
            </div>
          )}
        />

        <Route
          path="/search"
          render={() => (
            <BooksSearch />
          )}
        />
      </div>
    )
  }
}

export default MyReads

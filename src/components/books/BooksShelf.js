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
            />
          </div>
        ))}
      </div>
    )
  }
}

export default BooksShelf

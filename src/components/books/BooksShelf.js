import React, { Component } from 'react'
import BooksList from './BooksList'
import * as BooksAPI from '../../utils/BooksAPI'
import PropTypes from 'prop-types'

class BooksShelf extends Component {
  static propTypes = {
    shelfCategory: PropTypes.array.isRequired,
    handleBookUpdate: PropTypes.func.isRequired
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
    const { shelfCategory, handleBookUpdate } = this.props
    let { books } = this.state

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

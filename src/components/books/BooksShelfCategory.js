import React, { Component } from 'react'
import booksCategory from '../../utils/BooksCategoryAPI'

class BooksShelfCategory extends Component {
  render() {
    return (
      <div className="book-shelf-changer" id="books-category">
        <select>
          <option value="none" disabled>Move to...</option>
          {booksCategory.map((shelf) => (
            <option
              key={shelf.id}
              value={shelf.value}
            >{shelf.title}</option>
          ))}
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BooksShelfCategory

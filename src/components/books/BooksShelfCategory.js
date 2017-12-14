import React, { Component } from 'react'

class BooksShelfCategory extends Component {
  render() {
    return (
      <div className="book-shelf-changer" id="books-category">
        <select>
          <option value="none" disabled>Move to...</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BooksShelfCategory

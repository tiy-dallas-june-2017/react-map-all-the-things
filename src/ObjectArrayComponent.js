import React, { Component } from 'react';

class ObjectArrayComponent extends Component {

  constructor() {
    super();

    this.state = {
      books: [
        { id: 1, title: 'Art of War', author: 'Sun Tzu' },
        { id: 265, title: 'Mobile ASP.NET MVC', author: 'Eric Sowell' },
        { id: 34, title: 'Basic Economics', author: 'Thomas Sowell' },
        { id: 86, title: 'The Prince', author: 'Niccolo Machiaveli'}
      ]
    };
  }

  render() {
    return (
      <div className="object-array-component">
        <ul>
          {this.state.books.map(book => <li key={book.id}>{book.title} by {book.author}</li>)}
        </ul>
      </div>
    );
  }

}

export default ObjectArrayComponent;

import React, { Component } from 'react';

class StringComponent extends Component {

  constructor() {
    super();

    this.state = {
      strings: ['steak', 'Dr Pepper', 'comic books', 'movies', 'books']
    }
  }

  render() {

    const items = this.state.strings.map((x, i) => {

      let text = '';
      if (x[x.length - 1] === 's') {
        text = x + ' are awesome'
      }
      else {
        text = x + ' is awesome'
      }

      return <li key={i}>{text}</li>

    });

    return (
      <div className="string-component">
        <ul>
          {items}
        </ul>
      </div>
    );

  }

}

export default StringComponent;

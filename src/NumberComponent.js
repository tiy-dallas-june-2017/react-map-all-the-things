import React, { Component } from 'react';

class NumberComponent extends Component {

  constructor() {
    super();

    this.state = {
      numbers: [1, 6, 8, 42, 43, 59, 19]
    };
  }

  render() {
    return (
      <div>
        <ol>
          {this.state.numbers.map((x, i) => {
            return <li key={i}>{x}</li>
          })}
        </ol>
      </div>
    );
  }

}

export default NumberComponent;

import React, { Component } from 'react';

class Ruler extends Component {
  render() {

    let consortStuff = null;
    if (this.props.ruler.consorts.length > 0) {
      consortStuff = <ul>
        {this.props.ruler.consorts.map((lady, i) => <li key={i}>{lady}</li>)}
      </ul>
    }

    return <li>
        <h3>{this.props.ruler.name}</h3>
        <p>{this.props.ruler.startReign}-{this.props.ruler.endReign} BC</p>

        {consortStuff}
      </li>
  }
}

export default Ruler;

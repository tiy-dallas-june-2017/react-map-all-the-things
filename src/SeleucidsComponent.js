import React, { Component } from 'react';
import {rulers} from './data/seleucids.js';
import './SeleucidComponent.css';

class SeleucidsComponent extends Component {

  constructor() {
    super();

    this.state = {
      rulers: rulers
    }
  }

  render() {

    const rulerList = this.state.rulers.map((ruler) => {


      let consortComponents = null;
      if (ruler.consorts.length > 0) {
        consortComponents = (
          <div>
            <h3>Consorts:</h3>
            <ul>
              {ruler.consorts.map((lady) => {
                return <li>{lady}</li>
              })}
            </ul>

          </div>
        )
      }

      return <li key={ruler.name}>
          <h3>{ruler.name}</h3>
          <p>Reigned {ruler.startReign}-{ruler.endReign} BC</p>

          {consortComponents}

        </li>
    });


    return (
      <div className="seleucid-component">
        <h3>Seleucid Rulers ({this.state.rulers.length})</h3>

        <ol>
          {rulerList}
        </ol>
      </div>
    );
  }


  rendernot() {

    return (
      <div className="seleucid-component">
        <h3>Seleucid Rulers ({this.state.rulers.length})</h3>

        <ol>
          {this.state.rulers.map((ruler, i) => {


            let consortComponents = null;
            if (ruler.consorts.length > 0) {
              consortComponents = (
                <div>
                  <h3>Consorts:</h3>
                  <ul>
                    {ruler.consorts.map((lady) => {
                      return <li>{lady}</li>
                    })}
                  </ul>

                </div>
              )
            }

            return <li key={i}>
                <h3>{ruler.name}</h3>
                <p>Reigned {ruler.startReign}-{ruler.endReign} BC</p>

                {consortComponents}

              </li>
          })}
        </ol>
      </div>
    );
  }


}

export default SeleucidsComponent;

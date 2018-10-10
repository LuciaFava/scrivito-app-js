import React, { Component } from 'react';
import * as Scrivito from 'scrivito';

// Create shared history and pass it to Scrivito
const history = createBrowserHistory();
Scrivito.useHistory(history);

class Main extends Component {
  render() {
    return (
      <li className="Main">
        Main
      </li>
    );
  }
}

export default Main;
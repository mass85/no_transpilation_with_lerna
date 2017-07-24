import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {a, b} from 'shared';

class App extends Component {
  render() {
    return <div>Hello {this.props.name}, {a()}</div>;
  }
};

ReactDOM.render(
<App name="World" />,
  document.getElementById('react-container')
);
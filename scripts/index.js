import React from 'react';
import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}

ReactDOM.render(
  <HelloMessage name="React!" />,
    document.getElementById('content')
);

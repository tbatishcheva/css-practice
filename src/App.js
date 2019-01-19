import React, { Component } from 'react';
import Header from './Header';
import Description from './Description';
import Content from './Content';
import Actions from './Actions';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Actions />
        <Description />
        <Content />
      </div>
    );
  }
}

export default App;

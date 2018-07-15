import React, { Component } from 'react';
import './App.css';
import Aux from "./hoc/Aux";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

class App extends Component {
  render() {
    return (
      <Aux>
            <Header/>
            <Content/>
      </Aux>
    );
  }
}

export default App;

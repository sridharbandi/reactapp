import React, { Component } from 'react';
import './App.css';
import Aux from "./hoc/Aux";
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <Aux>
            <Header/>
      </Aux>
    );
  }
}

export default App;

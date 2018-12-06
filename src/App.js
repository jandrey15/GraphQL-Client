import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const CursosQuery = gql`
  query CursosQuery {
    cursos {
      titulo
      descripcion
      profesor {
        nombre
      }
    }
  }
`

// export default App;
export default graphql(CursosQuery, {
  options: {
    pollInterval: 2000
  }
})(App);

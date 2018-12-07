import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class App extends Component {
  
  render() {
    // console.log(this.props);
    const { loading, cursos } = this.props.data
    if (loading) return <h1>Loading</h1>

    return (
      <div className="App">
        <h1>Listado de cursos</h1>
        {cursos.map(curso => (
          <div className="Curso" key={curso.id}>
            <h3>{curso.titulo}</h3>
            <p>{curso.descripcion}</p>
            <hr/>
            {
              curso.profesor !== null &&
              <p>Profesor: {curso.profesor.nombre}</p>
            }
          </div>
        ))}
      </div>
    );
  }
}

const CursosQuery = gql`
  query CursosQuery {
    cursos {
      id
      titulo
      descripcion
      profesor {
        nombre
      }
    }
  }
`

// export default App;
// Con polling le decimos que ejecute la query cada 2 segundos
export default graphql(CursosQuery, {
  options: {
    pollInterval: 2000
  }
})(App);

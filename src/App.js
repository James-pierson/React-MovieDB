import React, { Component } from 'react';
import SearchFuntion from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    console.log("This is my initializer")


    const movies = [
      {id: 0, title: "Avengers: Infinity War", overview: "filler"},
      {id: 1, title: "Avengers: Infinity War", overview: "filler"},
    ]

    this.state = {rows: [ 
      <p key="1">This is my rows</p>
    ]}

    var movieRows = []
    movies.forEach((movie) => {
      console.log(movie.title)
      movieRows.push(<p>Movie title: {movie.title}</p>)
    })
  }

  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img width="100" alt="logo" src="logo.png"/>
              </td>
              <td width="8"/>
              <td>
                 <h3>MoviesDB Search</h3>
              </td>
            </tr>
          </tbody>
        </table>

        <input style={{
          fontSize: 24,
          display: 'block',
          width: '99%',
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16
        }} placeholder="Enter search tearm"/>

        {this.state.rows}
      </div>
    );
  }
}

export default App;

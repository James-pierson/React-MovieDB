import React, { Component } from 'react';
import MovieRow from "./MovieRow"
import API from '/api.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    console.log("This is my initializer")


    const movies = [
      { id: 0, title: "Avengers: Infinity War", overview: "filler" },
      { id: 1, title: "Avengers: Infinity War", overview: "filler" },
    ]

    var movieRows = []
    API.forEach((movie) => {
      console.log(movie.title)
      const movieRow = <MovieRow />
      // const movieRow = <table key={movie.id}>
      //   <tbody>
      //     <tr>
      //       <td>
      //         <img alt="poster" src="" />
      //       </td>
      //       <td />
      //       <td>
      //         {movie.title}
      //       </td>
      //     </tr>
      //   </tbody>
      // </table>
      movieRows.push(movieRow)
    })

    this.state = { rows: movieRows }
  }

  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img width="100" alt="logo" src="logo.png" />
              </td>
              <td width="8" />
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
        }} placeholder="Enter search term" />

        {this.state.rows}
      </div>
    );
  }
}

export default App;

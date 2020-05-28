import React, { Component } from 'react';
import MovieRow from "./MovieRow"
import $ from "jquery"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.performSearch()
  }

  performSearch() {
    const urlString = ""
    $.ajax( {
      url: urlString,
      success: (searchResults) => {
        const results = searchResults.results
        var movieRows = []

        // Loops through movies
        results.forEach((movie) => {
          const movieRow = <MovieRow movie={movie}/>
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }

    })
  }

  searchResults(event) {
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
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
        }} onChange={this.searchResults} placeholder="Enter search term" />

        {this.state.rows}
      </div>
    );
  }
}

export default App;

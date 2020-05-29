import React from "react"

class MovieRow extends React.Component {

    viewMovie() {
      console.log("test")
    }

    render() {
        return <table key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img alt="poster" width="120" src={this.props.movie.poster_src} />
            </td>
            <td/>
            <td>
              <strong>{this.props.movie.title}</strong>
              <p>{this.props.movie.overview}</p>
              <input type="button" onClick={this.viewMovie} value="View"/>
            </td>
          </tr>
        </tbody>
      </table>

    }
}

export default MovieRow
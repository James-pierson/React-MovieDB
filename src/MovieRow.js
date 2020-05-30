import React from "react"

class MovieRow extends React.Component {

    viewMovie() {
      console.log("test")
    }

    playMovie() {
      console.log("test 2")
    }

    render() {
        return <table className="tableStyle" key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img className="posterImg" width="120" src={this.props.movie.poster_src} />
            </td>
            <td/>
            <td>
              <strong>{this.props.movie.title}</strong>
              <p className="overviewStyle">{this.props.movie.overview}</p>
              <input type="button" onClick={this.viewMovie} value="View"/>
              <input type="button" onClick={this.playMovie} value="Play"/>
            </td> 
          </tr>
        </tbody>
      </table>

    }
}

export default MovieRow
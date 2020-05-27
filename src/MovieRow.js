import React from "react"

class MovieRow extends React.Component {
    render() {
        return <table key={movie.id}>
        <tbody>
          <tr>
            <td>
              <img alt="poster" src="" />
            </td>
            <td />
            <td>
              {movie.title}
            </td>
          </tr>
        </tbody>
      </table>

    }
}

export default MovieRow
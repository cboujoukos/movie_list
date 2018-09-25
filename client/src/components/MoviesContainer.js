import React, { Component } from 'react';
import axios from 'axios';

class MoviesContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      movies: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3001/api/v1/movies.json')
    .then(rsp => {
      console.log(rsp)
      this.setState({
        movies: rsp.data
      })
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="Movies-container">
        {this.state.movies.map( movie => {
          return (
            <div className="movie" key={movie.id}>
              <h3>{movie.title}</h3>
            </div>
          )
        })}
      </div>
    )
  }
}

export default MoviesContainer;

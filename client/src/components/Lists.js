import React, { Component } from 'react';
import axios from 'axios';

class ListsContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      lists: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3001/api/v1/lists.json')
    .then(rsp => {
      console.log(rsp)
      this.setState({
        lists: rsp.data
      })
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="Lists-container">
        Lists
      </div>
    )
  }
}

export default ListsContainer;

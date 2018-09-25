import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Header from './components/Header';
import Lists from './components/ListsContainer';
import Movies from './components/MoviesContainer';

class App extends Component {

  constructor(){
    super();
    this.state = {
      current_user:null
    }
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }

  componentDidMount() {
    let that = this
    axios.get('http://localhost:3001/users/check_for_user', {

    })
    .then(function(rsp){
      if(rsp.data.email){
        this.setState({
          current_user: rsp.data.email
        })
      } else {
        that.setState({
          current_user: null
        })
      }
    })
    .catch(function(err){
      console.log(err);
    })
  }

  updateCurrentUser(email) {
    this.setState({
      current_user: email
    })
  }

  render() {
    return (
      <div className="App">
        <Header updateCurrentUser={this.updateCurrentUser} />
        <Lists />
        <Movies />
      </div>
    );
  }
}

export default App;

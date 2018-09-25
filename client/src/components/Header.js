import React, { Component } from 'react';
import SignUp from './SignUp';
import Logout from './Logout';
import Login from './Login';

class Header extends Component {
constructor(props){
    super(props);
    if (this.props.currentUser == null){
      this.state = {
        page:"login"
      }
    } else{
      this.state = {
        page: "delete"
      }
    }
    this.changePage = this.changePage.bind(this);
  }
changePage(newPage) {
    this.setState({
      page: newPage
    })
  }
render() {
    switch(this.state.page) {
      case "signup":
        return <SignUp changePage={this.changePage} updateCurrentUser={this.props.updateCurrentUser}/>
      case "login":
        return <Login changePage={this.changePage} updateCurrentUser={this.props.updateCurrentUser}/>
      case "delete":
        return <Logout changePage={this.changePage} updateCurrentUser={this.props.updateCurrentUser}/>
    }
  }
}


export default Header

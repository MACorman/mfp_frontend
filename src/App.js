import React from 'react';
import LoginSignUp from './components/LoginSignUp';
import UserContainer from './containers/UserContainer';

class App extends React.Component {
  
  state = {
    users: [],
    currentUser: null,
    loggedIn: false
  }

  componentDidMount() {
    fetch('http://localhost:3000/users')
    .then(resp => resp.json())
    .then(users => this.setState({users}))

    if (sessionStorage.length > 0 && this.state.currentUser !== null) {
      this.setState({ currentUser: JSON.parse(sessionStorage.getItem("currentUser")), loggedIn: JSON.parse(sessionStorage.getItem("loggedIn")) })
    }
  }

  login = (user) => {
    console.log("user to log in", user)
    let currentUser = this.state.users.find(u => u.name === user.username)
    console.log("current user", currentUser)
    this.setState({currentUser: currentUser}, () => {

      sessionStorage.setItem("currentUser", JSON.stringify(this.state.currentUser))
    })
    this.setState({loggedIn: true}, () => { sessionStorage.setItem("loggedIn", JSON.stringify(this.state.loggedIn)) })
  }

  render() {
    return (
      <div>
        {
          this.state.loggedIn 
          ? 
          <UserContainer currentUser={this.state.currentUser ? this.state.currentUser : JSON.parse(sessionStorage.getItem("currentUser"))}/>
          :
          <LoginSignUp login={this.login}/>
        }
      </div>
    );

  }



}

export default App;

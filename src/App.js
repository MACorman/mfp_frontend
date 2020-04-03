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

    if (sessionStorage.length > 0) {
      this.setState({ currentUser: JSON.parse(sessionStorage.getItem("currentUser")) })
    }
  }

  login = (user) => {
    let currentUser = this.state.users.find(u => u.name === user.username)
    this.setState({ currentUser }, console.log("inside init set state", this.state.currentUser))
    sessionStorage.setItem("currentUser", JSON.stringify(currentUser))
  }

  logout = () => {
    this.setState({currentUser: null})
    sessionStorage.clear()
  }


  render() {
    return (
      <div>
        {
          this.state.currentUser 
          ? 
          <UserContainer 
          currentUser={this.state.currentUser ? this.state.currentUser : JSON.parse(sessionStorage.getItem("currentUser"))}
          logout={this.logout} 
          />
          :
          <LoginSignUp login={this.login}/>
        }
      </div>
    );

  }



}

export default App;


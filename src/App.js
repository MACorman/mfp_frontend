import React from 'react';
import LoginSignUp from './components/LoginSignUp';
import UserContainer from './containers/UserContainer';
import { Switch, Route, withRouter } from 'react-router-dom'

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
    this.props.history.push('/')
  }

  logout = () => {
    this.setState({currentUser: null})
    sessionStorage.clear()
    this.props.history.push('/login')
  }


  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/login' render={routerProps => <LoginSignUp 
            {...routerProps} 
            login={this.login}/>}/> 
          <Route exact path='/' render={routerProps => <UserContainer 
            {...routerProps}
            currentUser={this.state.currentUser ? this.state.currentUser : JSON.parse(sessionStorage.getItem("currentUser"))}
            logout={this.logout} 
            />}/>
        </Switch>
      </div>
    );

  }



}

export default withRouter(App);


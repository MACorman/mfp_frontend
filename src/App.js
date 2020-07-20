import React from 'react';
import LoginSignUp from './components/LoginSignUp';
import UserContainer from './containers/UserContainer';
import { Switch, Route, withRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import '../node_modules/react-vis/dist/style.css';
import './App.css'

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
    this.props.history.push('/profile')
  }

  logout = () => {
    this.setState({currentUser: null})
    sessionStorage.clear()
    this.props.history.push('/')
  }

  createNewUser = (user) => {
    console.log("yip")
    fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: user.username,
        password: user.password
      })
    })
    .then(resp => resp.json())
    .then(user => {
      let updatedUsers = [...this.state.users, user]
      this.setState({users: updatedUsers})
      let currentUser = user
      this.setState({ currentUser }, console.log("inside init set state", this.state.currentUser))
      sessionStorage.setItem("currentUser", JSON.stringify(currentUser))
      this.props.history.push('/profile')
    })
  }

  addGoals = (goals) => {
    // console.log('add goals', goals)
    fetch(`http://localhost:3000/users/${this.state.currentUser.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(goals)
    })
    .then(resp => resp.json())
    .then(console.log)
  }


  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' render={routerProps => <LoginSignUp 
            {...routerProps} 
            login={this.login}
            createNewUser={this.createNewUser}
            />}/> 
          <Route path='/profile' render={routerProps => <UserContainer 
            {...routerProps}
            currentUser={this.state.currentUser ? this.state.currentUser : JSON.parse(sessionStorage.getItem("currentUser"))}
            logout={this.logout} 
            addGoals={this.addGoals}
            />}/>
        </Switch>
      </div>
    );

  }



}

export default withRouter(App);


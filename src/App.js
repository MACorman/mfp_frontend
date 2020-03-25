import React from 'react';
import LoginSignUp from './components/LoginSignUp';
import UserContainer from './containers/UserContainer';

class App extends React.Component {
  
  state = {
    users: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/users')
    .then(resp => resp.json())
    .then(console.log)

    //cors issue
  }

  render() {
    return (
      <div>
        <LoginSignUp />
        <UserContainer />
      </div>
    );

  }



}

export default App;

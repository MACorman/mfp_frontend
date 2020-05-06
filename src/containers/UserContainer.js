import React from 'react' 
import DiaryContainer from './DiaryContainer'
import WeightContainer from './WeightContainer'
import Logout from '../components/Logout'
import { Switch, Route, withRouter } from 'react-router-dom'

class UserContainer extends React.Component {
    render() {
        console.log(this.props)
        return(
            <div>
                <p>{`Welcome ${this.props.currentUser.name}!`}</p>
                <DiaryContainer currentUser={this.props.currentUser} history={this.props.history} location={this.props.location} match={this.props.match}/>
                <WeightContainer currentUser={this.props.currentUser}/>
                <Logout logout={this.props.logout}/>
            </div>
        )
    }
}

export default UserContainer
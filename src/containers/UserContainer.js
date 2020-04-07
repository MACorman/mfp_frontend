import React from 'react' 
import DiaryContainer from './DiaryContainer'
import WeightContainer from './WeightContainer'
import Logout from '../components/Logout'

class UserContainer extends React.Component {
    render() {
        return(
            <div>
                <p>{`Welcome ${this.props.currentUser.name}!`}</p>
                <DiaryContainer currentUser={this.props.currentUser}/>
                <WeightContainer />
                <Logout logout={this.props.logout}/>
            </div>
        )
    }
}

export default UserContainer
import React from 'react' 
import DiaryContainer from './DiaryContainer'
import WeightContainer from './WeightContainer'
import Logout from '../components/Logout'
import { Switch, Route, withRouter } from 'react-router-dom'
import {Grid} from 'semantic-ui-react'


class UserContainer extends React.Component {
    render() {
        console.log(this.props)
        let date = new Date().toDateString()
        return(
            <div>
                <div className='header'>
                {/* <img id='background' src="mfp-bg-5.png" alt=''/> */}
                    <span className='welcome'>{`Welcome ${this.props.currentUser.name}!`}</span>
                    <span className='date'>{date}</span>
                </div>
                <Grid>
                    <Grid.Column width={8}>
                        <DiaryContainer currentUser={this.props.currentUser} history={this.props.history} location={this.props.location} match={this.props.match}/>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <WeightContainer currentUser={this.props.currentUser}/>
                    </Grid.Column>
                </Grid>
                <Logout logout={this.props.logout}/>
            </div>
        )
    }
}

export default UserContainer
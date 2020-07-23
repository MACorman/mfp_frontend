import React from 'react' 
import DiaryContainer from './DiaryContainer'
import WeightContainer from './WeightContainer'
import Logout from '../components/Logout'
import { Switch, Route, withRouter } from 'react-router-dom'
import {Grid} from 'semantic-ui-react'
import GoalsModal from '../components/GoalsModal'
import {Button} from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCog } from '@fortawesome/free-solid-svg-icons'


class UserContainer extends React.Component {

    state = {
        showModal: false
    }

    showModalFunc = () => {
        this.setState({showModal: !this.state.showModal})
    }

    render() {
        console.log(this.props)
        let date = new Date().toDateString()
        return(
            <div>
                <div className='header'>
                {/* <img id='background' src="mfp-bg-5.png" alt=''/> */}
                    <Logout logout={this.props.logout}/>
                    <div className='nav-btns'>
                        <FontAwesomeIcon icon={faUserCog} size={'2x'} color={'white'} onClick={this.showModalFunc} />
                    </div>
                    <GoalsModal addGoals={this.props.addGoals} showModal={this.state.showModal} showModalFunc={this.showModalFunc}/>
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
            </div>
        )
    }
}

export default UserContainer
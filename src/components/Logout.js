import React from 'react'
import { Button, Input } from 'semantic-ui-react'
// import FontAwesome from 'react-fontawesome'
// import faStyles from 'font-awesome/css/font-awesome.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

class Logout extends React.Component {
    render() {
        return(
            <div className='nav-btns'>
                <FontAwesomeIcon icon={faSignOutAlt} size={'2x'} color={'white'}onClick={this.props.logout}/>
            </div>
        )
    }
}

export default Logout
import React from 'react'
import { Button, Input } from 'semantic-ui-react'

class Logout extends React.Component {
    render() {
        return(
            <div className='logout'>
                <Button color='olive' onClick={this.props.logout}>Logout</Button>
            </div>
        )
    }
}

export default Logout
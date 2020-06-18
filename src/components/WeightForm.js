import React from 'react'
import { Button, Input } from 'semantic-ui-react'

class WeightForm extends React.Component {

    state = {
        input: ''
    }

    weightHandler = (e) => {
        e.preventDefault()
        let weight = this.state.input
        let date = new Date().toISOString().slice(0, 10)
        this.props.addWeight(weight, date)
        this.setState({input: ''})
        // this.btn.setAttribute("disabled", "disabled");
        // need to figure out how to disable button with semantic ui
    }

    render() {
        return(
            <div className='weight_form'>
                <p>Add a New Weight</p>
                <form onSubmit={this.weightHandler}>
                    <Input onChange={(e) => this.setState({input: e.target.value})} type='text' placeholder="Enter Today's Weight" value={this.state.input}/>
                    <Button id='weight-button' color='olive'>Log Weight</Button>
                </form>
            </div>
        )
    }
}

export default WeightForm
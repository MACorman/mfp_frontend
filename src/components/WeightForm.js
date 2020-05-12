import React from 'react'

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
        this.btn.setAttribute("disabled", "disabled");
    }

    render() {
        return(
            <div>
                <form onSubmit={this.weightHandler}>
                    <input onChange={(e) => this.setState({input: e.target.value})} type='text' placeholder="Enter Today's Weight" value={this.state.input}/>
                    <input ref={btn => { this.btn = btn }} type='submit' />
                </form>
            </div>
        )
    }
}

export default WeightForm
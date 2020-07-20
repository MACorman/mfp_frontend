import React from 'react'
import Modal from 'react-modal'
import {Button, Input} from 'semantic-ui-react'

class GoalsModal extends React.Component{

    state = {
        goalWeight: null,
        goalCalories: null,
        // isOpen: false
    }

    submitHandler = (event) => {
        event.preventDefault()
        let goal_weight = parseInt(this.state.goalWeight)
        let goal_calories = parseInt(this.state.goalCalories)
        let goals = {
            goal_weight,
            goal_calories
        }
        this.props.addGoals(goals)
    }

    render() {
        return (
            <div>
                <Modal
                isOpen={this.props.showModal}
                // onAfterOpen={afterOpenModal}
                // onRequestClose={closeModal}
                // style={customStyles}
                contentLabel="Example Modal"
                >
                    <form onSubmit={this.submitHandler}>
                        <Button onClick={this.props.showModalFunc} color='olive'>close</Button>
                        <div>Please enter your goal weight</div>
                        <Input onChange={(e) => this.setState({goalWeight: e.target.value})} type='text' placeholder="Enter Goal Weight" value={this.state.goalWeight} />
                        <div>Please enter your calorie goal</div>
                        <Input onChange={(e) => this.setState({goalCalories: e.target.value})} type='text' placeholder="Enter Goal Calories" value={this.state.goalCalories} />
                        <br/>
                        <Button color='olive'>Submit</Button>
                    </form>
                </Modal>
            </div>
        )
    }
}

export default GoalsModal
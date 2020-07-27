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
        this.setState({goalWeight: null, goalCalories: null})
        this.props.showModalFunc()
    }

    render() {
        return (
            <div>
                <Modal
                className='goals-modal'
                isOpen={this.props.showModal}
                // onAfterOpen={afterOpenModal}
                // onRequestClose={closeModal}
                // style={customStyles}
                contentLabel="Example Modal"
                >
                    <div className='modal-done-btn' >
                        <Button onClick={this.props.showModalFunc} color='olive'>close</Button>
                    </div>
                    <form className='goals-modal-form' onSubmit={this.submitHandler}>
                        <div className='text'>Please enter your goal weight</div>
                        <Input onChange={(e) => this.setState({goalWeight: e.target.value})} type='text' placeholder="Enter Goal Weight" value={this.state.goalWeight} />
                        <div className='text'>Please enter your calorie goal</div>
                        <Input onChange={(e) => this.setState({goalCalories: e.target.value})} type='text' placeholder="Enter Goal Calories" value={this.state.goalCalories} />
                        <br/>
                        <div className='modal-submit'>
                            <Button color='olive'>Submit</Button>
                        </div>
                    </form>
                </Modal>
            </div>
        )
    }
}

export default GoalsModal
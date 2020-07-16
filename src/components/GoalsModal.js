import React from 'react'
import Modal from 'react-modal'
import {Button, Input} from 'semantic-ui-react'

class GoalsModal extends React.Component{

    state = {
        goalWeight: null,
        goalCalories: null,
        // isOpen: false
    }

    // toggleModal = () => {
    //     this.setState({isOpen: !this.state.isOpen})
    // }

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
                    <Button onClick={this.props.showModalFunc} color='olive'>close</Button>
                    <div>Please enter your goal weight</div>
                    <Input onChange={(e) => this.setState({input: e.target.value})} type='text' placeholder="Enter Goal Weight" value={this.state.goalWeight} />
                    <div>Please enter your calorie goal</div>
                    <Input onChange={(e) => this.setState({input: e.target.value})} type='text' placeholder="Enter Goal Calories" value={this.state.goalCalories} />
                    <br/>
                    <Button color='olive'>Submit</Button>
                </Modal>
            </div>
        )
    }
}

export default GoalsModal
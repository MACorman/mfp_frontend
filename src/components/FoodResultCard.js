import React from 'react' 
import Select from "react-dropdown-select"
import { Dropdown, Button } from 'semantic-ui-react'

const options = [
    {
        key: '1',
        text: '1',
        value: '1'
    },
    {
        key: '2',
        text: '2',
        value: '2'
    },
    {
        key: '3',
        text: '3',
        value: '3'
    },
    {
        key: '4',
        text: '4',
        value: '4'
    },
    {
        key: '5',
        text: '5',
        value: '5'
    },
    {
        key: '6',
        text: '6',
        value: '6'
    },
    {
        key: '7',
        text: '7',
        value: '7'
    },
    {
        key: '8',
        text: '8',
        value: '8'
    },
    {
        key: '9',
        text: '9',
        value: '9'
    },
    {
        key: '10',
        text: '10',
        value: '10'
    }, 
]

class FoodResultCard extends React.Component {

    state = {
        servings: null
    }

    buttonHandler = () => {
        let foodID = this.props.food.foodId
        let servings = this.state.servings
        let foodName = this.props.food.label

        this.props.addFoodToDiary(foodID, servings, foodName)
    }

    handleClickQuantity = () => {

    }

    selectHandler = (e, data) => {
        let servings = data.value
        this.setState({ servings })
    }

    render() {
        return(
            <div>
                <div>{this.props.food.label}</div>
                <div>{parseInt(this.props.food.nutrients.ENERC_KCAL)} calories</div>
                <div>protein: {Math.ceil(parseInt(this.props.food.nutrients.PROCNT))}g </div>
                <div>fat: {Math.ceil(parseInt(this.props.food.nutrients.FAT))}g</div>
                <div>carbohydrates: {Math.ceil(parseInt(this.props.food.nutrients.CHOCDF))}g</div>
                <Dropdown
                    placeholder='Select Serving Size'
                    fluid
                    selection
                    options={options}
                    onChange={this.selectHandler}
                />
                <Button color='olive' onClick={this.buttonHandler}>Add to Food Diary</Button>
                <br/>
                <br/>
            </div>
        )
    }
}

export default FoodResultCard

//the commented out code successfully fetches results for serving sizes
//create dropdown to select quantity of serving



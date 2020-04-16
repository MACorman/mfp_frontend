import React from 'react' 
import Select from "react-dropdown-select"
import { Dropdown } from 'semantic-ui-react'

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
]

class FoodResultCard extends React.Component {

    state = {
        servings: null
    }

    buttonHandler = () => {
        // let foodObj = {
        //     name: this.props.food.label,
        //     cals: parseInt(this.props.food.nutrients.ENERC_KCAL),
        //     protein: Math.ceil(parseInt(this.props.food.nutrients.PROCNT)),
        //     fat: Math.ceil(parseInt(this.props.food.nutrients.FAT)),
        //     carbs: Math.ceil(parseInt(this.props.food.nutrients.CHOCDF))
        // }

        // fetch('https://api.edamam.com/api/food-database/nutrients?app_id=7d8c2753&app_key=d51390081730b31e3eff5aad9721f450', {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Accept": "application/json"
        //     },
        //     body: JSON.stringify({
        //         "ingredients": [
        //             {
        //               "quantity": 1,
        //               "measureURI": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
        //               "foodId": "food_bllzl82a5fkj4yanmzoztapdyryz"
        //             }
        //           ]
        //     })
        // })
        // .then(resp => resp.json())
        // .then(console.log)
        let foodID = this.props.food.foodId
        let servings = this.state.servings

        this.props.addFoodToDiary(foodID, servings)
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
                <button onClick={this.buttonHandler}>Add to Food Diary</button>
                <br/>
                <br/>
            </div>
        )
    }
}

export default FoodResultCard

//the commented out code successfully fetches results for serving sizes
//create dropdown to select quantity of serving



import React from 'react'
import FoodSearch from '../components/FoodSearch'
import { Switch, Route, withRouter } from 'react-router-dom'
import FoodDiaryCard from '../components/FoodDiaryCard'
import CalorieCalc from '../components/CalorieCalc'
import DiaryPage from '../components/DiaryPage'
import NutritionalBreakdown from '../components/NutritionalBreakdown'


class DiaryContainer extends React.Component {

    state = {
        // showSearch: false,
        category: null,
        breakfast: [],
        lunch: [],
        dinner: []
    }

    mealButtonHandler = (e) => {
        let category = e.target.name
        this.setState ({ category })
        // this.setState({ showSearch: true})
        this.props.history.push('/search')
    }

    addFoodToDiary = (foodID, servings, foodName) => {
        this.setState({ showSearch: false})
        console.log('success')

        fetch('https://api.edamam.com/api/food-database/nutrients?app_id=7d8c2753&app_key=d51390081730b31e3eff5aad9721f450', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                "ingredients": [
                    {
                      "quantity": parseInt(servings),
                      "measureURI": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                      "foodId": foodID
                    }
                  ]
            })
        })
        .then(resp => resp.json())
        .then(data => {
            let foodData = {
                name: foodName,
                servings: servings,
                data
            }
        
            switch(this.state.category) {
                case 'breakfast':
                    this.setState({ breakfast: [...this.state.breakfast, foodData]})
                    break
                case 'lunch':
                    this.setState({ lunch: [...this.state.lunch, foodData]})
                    break
                case 'dinner':
                    this.setState({ dinner: [...this.state.dinner, foodData]})
                    break
            }
        })

    }

    logButtonHandler = () => {

    }

    render() {
        // let date = new Date().toDateString()
        return(
            <div>
                <Switch>
                    <Route exact path='/search' render={routerProps => <FoodSearch {...routerProps} addFoodToDiary={this.addFoodToDiary}/>}/>
                    <Route exact path='/profile' render={routerProps => <DiaryPage {...routerProps} breakfast={this.state.breakfast} lunch={this.state.lunch} dinner={this.state.dinner} mealButtonHandler={this.mealButtonHandler}/>}/>
                    <Route exact path='/nutrition' render={routerProps => <NutritionalBreakdown {...routerProps}/>}/>
                </Switch>
            </div>
        )
    }
}

export default DiaryContainer

// can add foods to diary from search however does not pull diaries from database
// click log food diary does post to diaries api


// <div>
//     <div>{date}</div>
//     <CalorieCalc breakfast={this.state.breakfast} lunch={this.state.lunch} dinner={this.state.dinner}/>
//     <h4>Breakfast</h4>
//     {this.state.breakfast.map(food => <FoodDiaryCard key={food.data.uri} {...food}/>)}
//     <button name='breakfast' onClick={this.mealButtonHandler}>Add Breakfast</button>
//     <h4>Lunch</h4>
//     {this.state.lunch.map(food => <FoodDiaryCard key={food.data.uri} {...food}/>)}
//     <button  name='lunch' onClick={this.mealButtonHandler}>Add Lunch</button>
//     <h4>Dinner</h4>
//     {this.state.dinner.map(food => <FoodDiaryCard key={food.data.uri} {...food}/>)}
//     <button name='dinner' onClick={this.mealButtonHandler}>Add Dinner</button>
//     <br/>
//     <button>See Daily Nutritional Info</button>
//     <button>Log Food Diary</button>
// </div>
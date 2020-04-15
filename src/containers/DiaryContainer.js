import React from 'react'
import FoodSearch from '../components/FoodSearch'
import { Switch, Route, withRouter } from 'react-router-dom'


class DiaryContainer extends React.Component {

    state = {
        showSearch: false,
        category: null,
        breakfast: [],
        lunch: [],
        dinner: []
    }

    mealButtonHandler = (e) => {
        let category = e.target.name
        this.setState ({ category })
        this.setState({ showSearch: true})
    }

    addFoodToDiary = (foodObj, ) => {
        this.setState({ showSearch: false})
        console.log('success')

        switch(this.state.category) {
            case 'breakfast':
                this.setState({ breakfast: [...this.state.breakfast, foodObj]})
                break
            case 'lunch':
                this.setState({ lunch: [...this.state.lunch, foodObj]})
                break
            case 'dinner':
                this.setState({ dinner: [...this.state.dinner, foodObj]})
                break
        }
    }

    logButtonHandler = () => {

    }

    render() {
        let date = new Date().toDateString()
        return(
            <div>
                <p>Hello from Diary Container</p>
                {this.state.showSearch 
                    ? 
                    <FoodSearch addFoodToDiary={this.addFoodToDiary}/>
                    :
                    <div>
                        <div>{date}</div>
                        <h4>Breakfast</h4>
                        {this.state.breakfast.map(food => <div>{food.name}</div>)}
                        <button name='breakfast' onClick={this.mealButtonHandler}>Add Breakfast</button>
                        <h4>Lunch</h4>
                        {this.state.lunch.map(food => <div>{food.name}</div>)}
                        <button  name='lunch' onClick={this.mealButtonHandler}>Add Lunch</button>
                        <h4>Dinner</h4>
                        {this.state.dinner.map(food => <div>{food.name}</div>)}
                        <button name='dinner' onClick={this.mealButtonHandler}>Add Dinner</button>
                        <br/>
                        <button>Log Food Diary</button>
                    </div>
                }
                {/* <Route exact path='/food_search' render={routerProps => <FoodSearch {...routerProps}/>}/> */}
                
            </div>
        )
    }
}

export default DiaryContainer

// click 'add ....' button takes you to food search
// click log food diary does post to diaries api
import React from 'react'
import FoodSearch from '../components/FoodSearch'
import { Switch, Route, withRouter } from 'react-router-dom'
import FoodDiaryCard from '../components/FoodDiaryCard'
import CalorieCalc from '../components/CalorieCalc'

class DiaryPage extends React.Component {

    nutritionButtonHandler = () => {
        this.props.history.push('/nutrition')
    }
    render() {
        let date = new Date().toDateString()
        return (
            <div>
                <div>{date}</div>
                <CalorieCalc breakfast={this.props.breakfast} lunch={this.props.lunch} dinner={this.props.dinner}/>
                <h4>Breakfast</h4>
                {this.props.breakfast.map(food => <FoodDiaryCard key={food.data.uri} {...food}/>)}
                <button name='breakfast' onClick={this.props.mealButtonHandler}>Add Breakfast</button>
                <h4>Lunch</h4>
                {this.props.lunch.map(food => <FoodDiaryCard key={food.data.uri} {...food}/>)}
                <button  name='lunch' onClick={this.props.mealButtonHandler}>Add Lunch</button>
                <h4>Dinner</h4>
                {this.props.dinner.map(food => <FoodDiaryCard key={food.data.uri} {...food}/>)}
                <button name='dinner' onClick={this.props.mealButtonHandler}>Add Dinner</button>
                <br/>
                <button onClick={this.nutritionButtonHandler}>See Daily Nutritional Info</button>
                <button>Log Food Diary</button>
            </div>
        )
    }
}

export default DiaryPage
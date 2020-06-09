import React from 'react'
import FoodSearch from '../components/FoodSearch'
import { Switch, Route, withRouter } from 'react-router-dom'
import FoodDiaryCard from '../components/FoodDiaryCard'
import CalorieCalc from '../components/CalorieCalc'
import { Button, Input } from 'semantic-ui-react'

class DiaryPage extends React.Component {

    state = {
        breakfast: [],
        lunch: [],
        dinner: []
    }

    componentDidMount() {
        let diary = this.props.diaries.find(d => d.date === new Date().toISOString().slice(0, 10))
        console.log(this.props.diaries)
        diary && this.loadDiary(diary)
    }

    // nutritionButtonHandler = () => {
    //     // this.props.history.push('/nutrition')
    // }
    logHandler = () => {
        let date = new Date().toISOString().slice(0, 10)
        this.props.logButtonHandler(date)
        // this.btn.setAttribute("disabled", "disabled");
        // figure out how to disable buttons in semantic ui
    }

    loadDiary = (diary) => {
        // let diary = this.props.diaries.find(d => d.date === new Date().toISOString().slice(0, 10))
        let foods = diary.foods
        let food_diaries = diary.food_diaries
        let breakfast = food_diaries.filter(fd => fd.category === "breakfast")
        let breakfastIds = breakfast.map(fd => fd.food_id)
        let lunch = food_diaries.filter(fd => fd.category === "lunch")
        let lunchIds = lunch.map(fd => fd.food_id)
        let dinner = food_diaries.filter(fd => fd.category === "dinner")
        // let dinnerIds = dinner.map(fd => fd.food_id)
        
       foods.map(food => {
           console.log(food)
           if (breakfastIds.includes(food.id)) {
               this.setState({breakfast: [...this.state.breakfast, food]})
           }
            else if (lunchIds.includes(food.id)) {
                this.setState({lunch: [...this.state.lunch, food]})
            } else {
                this.setState({dinner: [...this.state.dinner, food]})
            }
       })
    }

    //if a diary exists for that day and that user 
    //load the diary page
    //grab all the foods from diary
    //grab all the food diaries
    //create arrays of food diarys based on category
    //if category array contains food id
    //print in that section of the diary

    render() {
        let date = new Date().toDateString()
        let diary = this.props.diaries.find(d => d.date === new Date().toISOString().slice(0, 10))
        diary && console.log("hmmm does it work", diary.foods)
        // console.log(this.state)
        return (
            <div className='diary_page'>
                {/* <div>{date}</div> */}
                {   this.state.breakfast.length > 0
                ?
                    <div>{this.state.breakfast.map(f => f.name)}</div>
                :
                    <div>
                        {/* <CalorieCalc breakfast={this.props.breakfast} lunch={this.props.lunch} dinner={this.props.dinner}/> */}
                        <h4>Breakfast</h4>
                        <hr className='hr'/>
                        {this.props.breakfast.map(food => <FoodDiaryCard key={food.data.uri} {...food}/>)}
                        <Button color='olive' name='breakfast' onClick={this.props.mealButtonHandler}>Add Breakfast</Button>
                        <h4>Lunch</h4>
                        <hr className='hr'/>
                        {this.props.lunch.map(food => <FoodDiaryCard key={food.data.uri} {...food}/>)}
                        <Button  color='olive' name='lunch' onClick={this.props.mealButtonHandler}>Add Lunch</Button>
                        <h4>Dinner</h4>
                        <hr className='hr'/>
                        {this.props.dinner.map(food => <FoodDiaryCard key={food.data.uri} {...food}/>)}
                        <Button color='olive' name='dinner' onClick={this.props.mealButtonHandler}>Add Dinner</Button>
                        <br/>
                        <div id='nutrition_log_btns'>
                            <Button color='olive' onClick={this.props.nutritionButtonHandler}>See Daily Nutritional Info</Button>
                            <Button color='olive' onClick={this.logHandler}>Log Food Diary</Button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default DiaryPage
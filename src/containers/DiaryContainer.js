import React from 'react'
import FoodSearch from '../components/FoodSearch'
import { Switch, Route, withRouter } from 'react-router-dom'
import FoodDiaryCard from '../components/FoodDiaryCard'
import CalorieCalc from '../components/CalorieCalc'
import DiaryPage from '../components/DiaryPage'
import NutritionalBreakdown from '../components/NutritionalBreakdown'
import { Button, Input } from 'semantic-ui-react'


class DiaryContainer extends React.Component {

    state = {
        // showSearch: false,
        show: null,
        category: null,
        breakfast: [],
        lunch: [],
        dinner: [],
        diaries: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/diaries')
        .then(resp => resp.json())
        .then(diaries => {
            let userDiaries = diaries.filter(d => d.user_id == this.props.currentUser.id)
            this.setState({ diaries: userDiaries })
        })
    }

    mealButtonHandler = (e) => {
        let category = e.target.name
        this.setState ({ category })
        // this.setState({ showSearch: true})
        // this.props.history.push('/search')
        this.setState({show: 'search'})
    }

    addFoodToDiary = (foodID, servings, foodName) => {
        this.setState({ show: null})
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

    logButtonHandler = (date) => {
        //create diary X
        //create food
        //create food diary

        fetch('http://localhost:3000/diaries', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                user_id: parseInt(this.props.currentUser.id),
                date: date
            })
        })
        .then(resp => resp.json())
        .then(diary => {
            //concat b, l, and d X
            //make unique X
            //iterate over array and create a post for each X
            //in back end need to do find or create by
            let foodsArr = this.state.breakfast.concat(this.state.lunch).concat(this.state.dinner)
            // console.log(foodsArr)
            let uniqueFoodName = []
            let unique = []
            foodsArr.forEach(food => {
                if(!uniqueFoodName.includes(food.name)) {
                    uniqueFoodName.push(food.name)
                    unique.push(food)
                }
            })
            // console.log("unique foods: ", uniqueFoodName, unique)
            unique.forEach(food => {
                fetch('http://localhost:3000/foods', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({
                        name: food.name,
                        calories: food.data.calories,
                        carbs: food.data.totalNutrients.CHOCDF.quantity,
                        fat: food.data.totalNutrients.FAT.quantity,
                        protein: food.data.totalNutrients.PROCNT.quantity
                    })
                })
                .then(resp => resp.json())
                .then(food => {
                    let breakfastFoodNames = this.state.breakfast.map(food => food.name)
                    
                    if(breakfastFoodNames.includes(food.name)) {
                        fetch('http://localhost:3000/food_diaries', {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                "Accept": "application/json"
                            },
                            body: JSON.stringify({
                                food_id: food.id,
                                diary_id: diary.id,
                                category: "breakfast"
                            })
                        })
                        .then(resp => resp.json())
                        .then(console.log)
                    }

                    let lunchFoodNames = this.state.lunch.map(food => food.name)
                    
                    if(lunchFoodNames.includes(food.name)) {
                        fetch('http://localhost:3000/food_diaries', {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                "Accept": "application/json"
                            },
                            body: JSON.stringify({
                                food_id: food.id,
                                diary_id: diary.id,
                                category: "lunch"
                            })
                        })
                        .then(resp => resp.json())
                        .then(console.log)
                    }

                    let dinnerFoodNames = this.state.dinner.map(food => food.name)
                    
                    if(dinnerFoodNames.includes(food.name)) {
                        fetch('http://localhost:3000/food_diaries', {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                "Accept": "application/json"
                            },
                            body: JSON.stringify({
                                food_id: food.id,
                                diary_id: diary.id,
                                category: "dinner"
                            })
                        })
                        .then(resp => resp.json())
                        .then(console.log)
                    }
                })
            })

        })
    } 

    backButton = () => {
        this.setState({show: null})
    }
    
    nutritionButtonHandler = () => {
        // this.props.history.push('/nutrition')
        this.setState({show: 'nutrition'})
    }

    renderComponent = () => {
        switch(this.state.show) {
            case 'search':
                return <FoodSearch addFoodToDiary={this.addFoodToDiary}/>
            case 'nutrition':
                return <NutritionalBreakdown backButton={this.backButton} breakfast={this.state.breakfast} lunch={this.state.lunch} dinner={this.state.dinner}/>
            default: 
                return <DiaryPage diaries={this.state.diaries} logButtonHandler={this.logButtonHandler} nutritionButtonHandler={this.nutritionButtonHandler} history={this.props.history} location={this.props.location} match={this.props.match} breakfast={this.state.breakfast} lunch={this.state.lunch} dinner={this.state.dinner} mealButtonHandler={this.mealButtonHandler}/>
        }
    }

    render() {
        // let date = new Date().toDateString()
        return(
            <div className='diary_container'>
                {/* <DiaryPage nutritionButtonHandler={this.nutritionButtonHandler} history={this.props.history} location={this.props.location} match={this.props.match} breakfast={this.state.breakfast} lunch={this.state.lunch} dinner={this.state.dinner} mealButtonHandler={this.mealButtonHandler}/>
                {this.state.show === 'search' && <FoodSearch addFoodToDiary={this.addFoodToDiary}/>}
                {this.state.show === 'nutrition' && <NutritionalBreakdown />} */}
                {this.renderComponent()}
            </div>
        )
    }
}

export default DiaryContainer

// <Switch>
//     <Route exact path='/search' render={routerProps => <FoodSearch {...routerProps} addFoodToDiary={this.addFoodToDiary}/>}/>
//     {/* <Route path='/profile' render={routerProps => <DiaryPage {...routerProps} breakfast={this.state.breakfast} lunch={this.state.lunch} dinner={this.state.dinner} mealButtonHandler={this.mealButtonHandler}/>}/> */}
//     <Route exact path='/nutrition' render={routerProps => <NutritionalBreakdown {...routerProps}/>}/>
// </Switch>

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
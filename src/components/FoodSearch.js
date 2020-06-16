import React from 'react' 
import FoodResultCard from './FoodResultCard'
import {Button, Input} from 'semantic-ui-react'


class FoodSearch extends React.Component {

    state = {
        foodInput: '',
        results: null
    }

    submitHandler = (e) => {
        e.preventDefault()
        let searchTerm = this.state.foodInput
        searchTerm = searchTerm.split(' ').join('%20')
        console.log(searchTerm)
        this.searchFood(searchTerm)
    }

    searchFood = (searchTerm) => {
        fetch(`https://api.edamam.com/api/food-database/parser?ingr=${searchTerm}&app_id=7d8c2753&app_key=d51390081730b31e3eff5aad9721f450`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data.hints)
            this.setState({ results: data.hints})
        })

        
    }

    render() {
        return(
            <div>
                <form className='search_form'onSubmit={this.submitHandler}>
                    <p>Search for a food to add to your diary:</p>
                    <Input type="text" placeholder="Search Food" value={this.state.foodInput} onChange={(e) => this.setState({foodInput: e.target.value})}/>
                    <Button id='food-search-button' color='olive' type="submit">Search</Button>
                </form>
                {
                    this.state.results
                    &&
                    <div>
                        <div>{this.state.results.map(food => {
                            return <FoodResultCard key={food.food.foodId} addFoodToDiary={this.props.addFoodToDiary} {...food}/>
                        })}</div>
                    </div>
                }
            </div>
        )
    }
}

export default FoodSearch 
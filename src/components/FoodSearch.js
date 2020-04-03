import React from 'react' 

class FoodSearch extends React.Component {

    state = {
        foodInput: ''
    }

    submitHandler = (e) => {
        e.preventDefault()
        let searchTerm = this.state.foodInput
        console.log(searchTerm)
        this.searchFood(searchTerm)
    }

    searchFood = (searchTerm) => {
        fetch(`https://api.edamam.com/api/food-database/parser?ingr=${searchTerm}&app_id=7d8c2753&app_key=d51390081730b31e3eff5aad9721f450`)
        .then(resp => resp.json())
        .then(console.log)
        // got api up and working just have to do stuff with results 
    }

    render() {
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" placeholder="Search Food" value={this.state.foodInput} onChange={(e) => this.setState({foodInput: e.target.value})}/>
                    <input type="submit" value="Search" />
                </form>
            </div>
        )
    }
}

export default FoodSearch 
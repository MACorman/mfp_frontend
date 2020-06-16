import React from 'react'

class FoodDiaryCard extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div className='food-results-card'>
                <span className='food-name' >{this.props.name}</span>
                <br/>
                <span>Servings: {this.props.servings}</span>
                <br/>
                <span>Calories: {this.props.data.calories}</span>
            </div>
        )
    }
}

export default FoodDiaryCard
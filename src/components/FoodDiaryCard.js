import React from 'react'

class FoodDiaryCard extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <p>{this.props.name}</p>
                <p>Servings: {this.props.servings}</p>
                <p>Calories: {this.props.data.calories}</p>
            </div>
        )
    }
}

export default FoodDiaryCard
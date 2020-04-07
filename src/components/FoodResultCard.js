import React from 'react' 

class FoodResultCard extends React.Component {
    render() {
        return(
            <div>
                <div>{this.props.food.label}</div>
                <div>{parseInt(this.props.food.nutrients.ENERC_KCAL)} calories</div>
                <div>protein: {Math.ceil(parseInt(this.props.food.nutrients.PROCNT))}g </div>
                <div>fat: {Math.ceil(parseInt(this.props.food.nutrients.FAT))}g</div>
                <div>carbohydrates: {Math.ceil(parseInt(this.props.food.nutrients.CHOCDF))}g</div>
                <button>Add to Food Diary</button>
                <br/>
                <br/>
            </div>
        )
    }
}

export default FoodResultCard
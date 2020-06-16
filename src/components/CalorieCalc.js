import React from 'react'

class CalorieCalc extends React.Component {

    totalBreakfastIntake = () => {
        let totalBreakCal
        if(this.props.breakfast.length) {
            let breakCalArr = this.props.breakfast.map(b => b.data.calories)
            totalBreakCal = parseInt(breakCalArr.reduce((a, b) => a + b))
        } else {
            totalBreakCal = 0
        }
        return totalBreakCal 
    }

    totalLunchIntake = () => {
        let totalLunchCal
        if(this.props.lunch.length) {
            let lunchCalArr = this.props.lunch.map(l => l.data.calories)
            totalLunchCal = parseInt(lunchCalArr.reduce((a, b) => a + b))
        } else {
            totalLunchCal = 0
        }
        return totalLunchCal
    }

    totalDinnerIntake = () => {
        let totalDinnerCal 
        if(this.props.dinner.length) {
            let dinnerCalArr = this.props.dinner.map(d => d.data.calories)
            totalDinnerCal = parseInt(dinnerCalArr.reduce((a, b) => a + b))
        } else {
            totalDinnerCal = 0
        }
        return totalDinnerCal
    }

    totalIntake = () => {
        let totalCal = this.totalBreakfastIntake() + this.totalLunchIntake() + this.totalDinnerIntake() 
        return totalCal
    }
    
    render() {
        return (
            <div className='cal_calc'>
                <p>Calories Remaining</p>
                <span>Goal: 2000 - Food: {this.totalIntake()} = </span>
                {
                    2000 - this.totalIntake() < 0 
                ?
                    <span className='neg-calories'>Remaining: {2000 - this.totalIntake()}</span>
                :
                    <span>Remaining: {2000 - this.totalIntake()}</span>
                }
            </div>
        ) 
    }
}

export default CalorieCalc
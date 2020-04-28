import React from 'react'


class NutritionalBreakdown extends React.Component {

    state = {
        foods: this.props.breakfast.concat(this.props.lunch).concat(this.props.dinner)
    }

    totalCal = () => {
        if(this.state.foods.length) {
            let calArr = this.state.foods.map(food => food.data.calories)
            return calArr.reduce((a, b) => a + b).toFixed(2)
        } else {
            return 0
        }
    }

    totalCarbs = () => {
        if(this.state.foods.length) {
            let carbArr = this.state.foods.map(food => food.data.totalNutrients.CHOCDF.quantity)
            return carbArr.reduce((a, b) => a + b).toFixed(2)
        } else {
            return 0
        }
    }

    totalFat = () => {
        if(this.state.foods.length) {
            let fatArr = this.state.foods.map(food => food.data.totalNutrients.FAT.quantity)
            return fatArr.reduce((a, b) => a + b).toFixed(2)
        } else {
            return 0
        }
    }

    totalProtein = () => {
        if(this.state.foods.length) {
            let proteinArr = this.state.foods.map(food => food.data.totalNutrients.PROCNT.quantity)
            return proteinArr.reduce((a, b) => a + b).toFixed(2)
        } else {
            return 0
        }
    }

    totalCholest = () => {
        if(this.state.foods.length) {
            let cholestArr = this.state.foods.map(food => food.data.totalNutrients.CHOLE.quantity)
            return cholestArr.reduce((a, b) => a + b).toFixed(2)
        } else {
            return 0
        }
    }

    totalCalcium = () => {
        if(this.state.foods.length) {
            let calciumArr = this.state.foods.map(food => food.data.totalNutrients.CA.quantity)
            return calciumArr.reduce((a, b) => a + b).toFixed(2)
        } else {
            return 0
        }
    }

    totalMonoSat = () => {
        if(this.state.foods.length) {
            let monoSatArr = this.state.foods.map(food => food.data.totalNutrients.FAMS.quantity)
            return monoSatArr.reduce((a, b) => a + b).toFixed(2)
        } else {
            return 0
        }
    }

    totalPolyUnSat = () => {
        if(this.state.foods.length) {
            let polyUnSatArr = this.state.foods.map(food => food.data.totalNutrients.FAPU.quantity)
            return polyUnSatArr.reduce((a, b) => a + b).toFixed(2)
        } else {
            return 0
        }
    }

    totalSatFat = () => {
        if(this.state.foods.length) {
            let satFatArr = this.state.foods.map(food => food.data.totalNutrients.FASAT.quantity)
            return satFatArr.reduce((a, b) => a + b).toFixed(2)
        } else {
            return 0
        }
    }

    totalFe = () => {
        if(this.state.foods.length) {
            let feArr = this.state.foods.map(food => food.data.totalNutrients.FE.quantity)
            return feArr.reduce((a, b) => a + b).toFixed(2)
        } else {
            return 0
        }
    }

    totalFiber = () => {
        if(this.state.foods.length) {
            let fiberArr = this.state.foods.map(food => food.data.totalNutrients.FIBTG.quantity)
            return fiberArr.reduce((a, b) => a + b).toFixed(2)
        } else {
            return 0
        }
    }

    totalK = () => {
        if(this.state.foods.length) {
            let kArr = this.state.foods.map(food => food.data.totalNutrients.K.quantity)
            return kArr.reduce((a, b) => a + b).toFixed(2)
        } else {
            return 0
        }
    }

    totalMg = () => {
        if(this.state.foods.length) {
            let mgArr = this.state.foods.map(food => food.data.totalNutrients.MG.quantity)
            return mgArr.reduce((a, b) => a + b).toFixed(2)
        } else {
            return 0
        }
    }

    totalNa = () => {
        if(this.state.foods.length) {
            let naArr = this.state.foods.map(food => food.data.totalNutrients.NA.quantity)
            return naArr.reduce((a, b) => a + b).toFixed(2)
        } else {
            return 0
        }
    }

    totalSugar = () => {
        if(this.state.foods.length) {
            let sugarArr = this.state.foods.map(food => food.data.totalNutrients.SUGAR.quantity)
            return sugarArr.reduce((a, b) => a + b).toFixed(2)
        } else {
            return 0
        }
    }

    render() {
        console.log(this.state.foods)
        return (
            <div>
                <button onClick={this.props.backButton}>Back</button>
                <div>Nutritional breakdown</div>
                <p>Total Cal: {this.totalCal()}</p>
                <p>Total Carbs: {this.totalCarbs()}g</p>
                <p>Total Fat: {this.totalFat()}g</p>
                <p>Total Protein: {this.totalProtein()}g</p>
                <p>Total Cholesterol: {this.totalCholest()}mg</p>
                <p>Total Calcium: {this.totalCalcium()}mg</p>
                <p>Total Monosaturated Fat: {this.totalMonoSat()}g</p>
                <p>Total Polyunsaturated Fat: {this.totalPolyUnSat()}g</p>
                <p>Total Saturated Fat: {this.totalSatFat()}g</p>
                <p>Total Iron: {this.totalFe()}mg</p>
                <p>Total Fiber: {this.totalFiber()}g</p>
                <p>Total Potassium: {this.totalK()}mg</p>
                <p>Total Magnesium: {this.totalMg()}mg</p>
                <p>Total Sodium: {this.totalNa()}mg</p>
                <p>Total Sugars: {this.totalSugar()}g</p>
            </div>

        )
    }
}

export default NutritionalBreakdown
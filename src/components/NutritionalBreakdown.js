import React from 'react'
import {Button} from 'semantic-ui-react'
import {RadialChart} from 'react-vis'


class NutritionalBreakdown extends React.Component {

    state = {
        foods: this.props.breakfast.concat(this.props.lunch).concat(this.props.dinner)
    }

    totalCal = () => {
        if(this.state.foods.length) {
            let calArr = this.state.foods.map(food => food.data.calories)
            return calArr.reduce((a, b) => a + b)
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

        let macros = [
            {color: '#e3991b', label: 'Carbs', subLabel: `${((parseInt(this.totalCarbs())/(parseInt(this.totalProtein())+parseInt(this.totalCarbs())+parseInt(this.totalFat())))*100).toFixed(0)}%`, angle: (parseInt(this.totalCarbs())/(parseInt(this.totalProtein())+parseInt(this.totalCarbs())+parseInt(this.totalFat())))*100}, 
            {color: '#c9e31b', label: 'Protein', subLabel: `${((parseInt(this.totalProtein())/(parseInt(this.totalProtein())+parseInt(this.totalCarbs())+parseInt(this.totalFat())))*100).toFixed(0)}%`, angle: (parseInt(this.totalProtein())/(parseInt(this.totalProtein())+parseInt(this.totalCarbs())+parseInt(this.totalFat())))*100}, 
            {color: '#65e31b', label: 'Fat', subLabel: `${((parseInt(this.totalFat())/(parseInt(this.totalProtein())+parseInt(this.totalCarbs())+parseInt(this.totalFat())))*100).toFixed(0)}%`, angle: (parseInt(this.totalFat())/(parseInt(this.totalProtein())+parseInt(this.totalCarbs())+parseInt(this.totalFat())))*100}
        ]
        console.log("carbss", (parseInt(this.totalCarbs()) + parseInt(this.totalFat()) + parseInt(this.totalProtein())))
        return (
            <div>
                <Button color='olive' onClick={this.props.backButton}>Back</Button>
                <div className='nutrition-details'>
                    <p>Nutritional breakdown</p>
                    <RadialChart className='pie-chart'
                        data={macros}
                        width={300}
                        height={300} 
                        showLabels={true}
                        labelsStyle={{
                            fontSize: 14,
                            letterSpacing: 0.4,
                            
                        }}
                        colorType={'literal'}
                        
                    />
                    <span>Total Cal:</span><span className='nutrient'> {this.totalCal()}/2000</span>
                    <br/>
                    <span>Total Carbs:</span><span className='nutrient'> {this.totalCarbs()}/225 g</span>
                    <br/>
                    <span>Total Fat:</span><span className='nutrient'> {this.totalFat()}/67 g</span>
                    <br/>
                    <span>Total Protein:</span><span className='nutrient'> {this.totalProtein()}/125 g</span>
                    <br/>
                    <span>Total Cholesterol:</span><span className='nutrient'> {this.totalCholest()}/300 mg</span>
                    <br/>
                    <span>Total Calcium:</span><span className='nutrient'> {this.totalCalcium()}/2,000 mg</span>
                    <br/>
                    <span>Total Monosaturated Fat:</span><span className='nutrient'> {this.totalMonoSat()}/0 g</span>
                    <br/>
                    <span>Total Polyunsaturated Fat:</span><span className='nutrient'> {this.totalPolyUnSat()}/0 g</span>
                    <br/>
                    <span>Total Saturated Fat:</span><span className='nutrient'> {this.totalSatFat()}/20 g</span>
                    <br/>
                    <span>Total Iron:</span><span className='nutrient'> {this.totalFe()}/10 mg</span>
                    <br/>
                    <span>Total Fiber:</span><span className='nutrient'> {this.totalFiber()}/25 g</span>
                    <br/>
                    <span>Total Potassium:</span><span className='nutrient'> {this.totalK()}/4,700 mg</span>
                    <br/>
                    <span>Total Magnesium:</span><span className='nutrient'> {this.totalMg()}/310 mg</span>
                    <br/>
                    <span>Total Sodium:</span><span className='nutrient'> {this.totalNa()}/2,300 mg</span>
                    <br/>
                    <span>Total Sugars:</span><span className='nutrient'> {this.totalSugar()}/67 g</span>

                </div>
                
            </div>

        )
    }
}

export default NutritionalBreakdown
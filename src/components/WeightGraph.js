import React from 'react'
import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, ChartLabel } from 'react-vis'

class WeightGraph extends React.Component {

    graphData = () => {
        let data = []
        if(this.props.weights.length) {
            this.props.weights.map(weight => {
                data.push({x: `${weight.date.slice(5, 7)}/${weight.date.slice(8, 10)}`, y: weight.measurement})
            })
        } else {
            let date = new Date().toISOString()
            data = [{x: `${date.slice(5, 7)}/${date.slice(8, 10)}`, y: 0}]
        }
        return data
    }

    render() {
        console.log("weight data: ", this.graphData())
        return(
            <div>
                <p>Weight Progress Over Time</p>
                
                    <XYPlot className='graph' height={500} width = {500} xType='ordinal' yDomain={[40, 100]}>
                        <HorizontalGridLines style={{ stroke: "#e0e0e0"}}/>
                        <VerticalGridLines style={{ stroke: "#e0e0e0"}}/>
                        <XAxis />
                        <YAxis />
                        <LineSeries  data={this.graphData()}/>
                        <ChartLabel 
                            text="Date"
                            className="alt-x-label"
                            includeMargin={false}
                            xPercent={0.025}
                            yPercent={1.01}
                        />

                        <ChartLabel 
                            text="Weight (kg)"
                            className="alt-y-label"
                            includeMargin={false}
                            xPercent={0.06}
                            yPercent={0.06}
                            style={{
                            transform: 'rotate(-90)',
                            textAnchor: 'end'
                            }}
                        />
                    </XYPlot>
               
            </div>
        )
    }
}

export default WeightGraph
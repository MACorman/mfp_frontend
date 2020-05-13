import React from 'react'
import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, ChartLabel } from 'react-vis'

// const data = [
//     {x: 0, y: 8},
//     {x: 1, y: 5},
//     {x: 2, y: 4},
//     {x: 3, y: 9},
//     {x: 4, y: 1},
//     {x: 5, y: 7},
//     {x: 6, y: 6},
//     {x: 7, y: 3},
//     {x: 8, y: 2},
//     {x: 9, y: 0}
//   ];

class WeightGraph extends React.Component {

    graphData = () => {
        let data = []
        this.props.weights.map(weight => {
            data.push({x: `${weight.date.slice(5, 7)}/${weight.date.slice(8, 10)}`, y: weight.measurement})
        })
        return data
    }

    render() {
        console.log("weight data: ", this.graphData())
        return(
            <div>
                <p>Weight Graph</p>
                <XYPlot height={300} width = {300} xType='ordinal'>
                    <HorizontalGridLines style={{ stroke: "#e0e0e0"}}/>
                    <VerticalGridLines style={{ stroke: "#e0e0e0"}}/>
                    <XAxis />
                    <YAxis />
                    <LineSeries style={{fill: 'none'}} data={this.graphData()}/>
                    <ChartLabel 
                        text="Date"
                        className="alt-x-label"
                        includeMargin={false}
                        xPercent={0.025}
                        yPercent={1.01}
                    />

                    <ChartLabel 
                        text="Weight"
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
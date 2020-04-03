import React from 'react'
import WeightForm from '../components/WeightForm'
import WeightGraph from '../components/WeightGraph'

class WeightContainer extends React.Component {
    render() {
        return(
            <div>
                <p>Weight Container</p>
                <WeightForm />
                <WeightGraph />
            </div>
        )
    }
}

export default WeightContainer
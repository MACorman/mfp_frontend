import React from 'react'
import WeightForm from '../components/WeightForm'
import WeightGraph from '../components/WeightGraph'

class WeightContainer extends React.Component {

    addWeight = (weight, date) => {
        fetch('http://localhost:3000/weights', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                user_id: this.props.currentUser.id,
                measurement: weight,
                date: date
            })
        })
        .then(resp => resp.json())
        .then(console.log)
    }

    render() {
        return(
            <div>
                <p>Weight Container</p>
                <WeightForm addWeight={this.addWeight} />
                <WeightGraph />
            </div>
        )
    }
}

export default WeightContainer
import React from 'react'

class WeightForm extends React.Component {
    render() {
        return(
            <div>
                <form>
                    <input type='text' placeholder="Enter Today's Weight" />
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

export default WeightForm
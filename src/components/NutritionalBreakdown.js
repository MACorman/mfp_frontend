import React from 'react'


class NutritionalBreakdown extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.backButton}>Back</button>
                <div>Nutritional breakdown</div>
            </div>

        )
    }
}

export default NutritionalBreakdown
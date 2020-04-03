import React from 'react'
import FoodSearch from '../components/FoodSearch'

class DiaryContainer extends React.Component {
    render() {
        return(
            <div>
                <p>Hello from Diary Container</p>
                <FoodSearch />
            </div>
        )
    }
}

export default DiaryContainer
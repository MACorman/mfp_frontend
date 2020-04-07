import React from 'react'
import FoodSearch from '../components/FoodSearch'
import { getAllByPlaceholderText } from '@testing-library/react'

class DiaryContainer extends React.Component {
    render() {
        let date = new Date().toDateString()
        console.log(date)
        return(
            <div>
                <p>Hello from Diary Container</p>
                <FoodSearch />
                <div>{date}</div>
                <h4>Breakfast</h4>
                <h4>Lunch</h4>
                <h4>Dinner</h4>
                <button>Log Food Diary</button>
                
            </div>
        )
    }
}

export default DiaryContainer
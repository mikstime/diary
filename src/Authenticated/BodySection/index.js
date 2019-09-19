import React, { Component } from 'react'
import './style.sass'
import DailyTodos from './Sections/RunningListSection'
import OneDayTasks from './Sections/OneDayTasksSection'
import Notes from './Sections/Notes'
export default class BodySection extends Component {

    render() {
        return(
            <div className='authenticated-body'>
                <OneDayTasks/>
            </div>
        )
    }
}
import React, { Component } from 'react'
import SectionTemplate from '../SectionTemplate'
import OneDayTasks from './OneDayTasks'
class OneDayTasksSection extends Component {

    render() {

        return(
            <SectionTemplate sectionName='Daily Routine'>
                <OneDayTasks/>
            </SectionTemplate>
        )
    }
}

export default OneDayTasksSection
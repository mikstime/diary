import React, { Component, Fragment } from 'react'
import DailyTask, { AddTask } from './DailyTask'
import uuid from 'uuid/v4'
import produce from 'immer'
import TaskSetupper from './TasksSetupper'

const Days = ({days}) => (
    <div className='days-holder'>
        {days.map(dayName => <span key={uuid()}>{dayName}</span>)}
    </div>
)
class Tasks extends Component{

    state = { tasks : [] }
    addTask = (newTask) => {

        this.setState(
                produce(({tasks}) => {tasks.push({
                    id : uuid(),
                    ...newTask
                })}),
            this.fetchData
        )
    }
    fetchData = () => {
    }


    render() {
        const {tasks} = this.state
        const  { taskProperties } = this.props
        return(
            <Fragment>
                <Days days={['Mon', 'Tue', 'Wed', 'Thu', 'Fri',  'Sut', 'Sun']}/>
                <div className='daily-tasks-list'>
                    {tasks.map( task =><DailyTask key={task.id} {...task}{...taskProperties}/>)}
                    <AddTask taskProperties={taskProperties} onChange={this.addTask}/>
                </div>
            </Fragment>
        )
    }

}
export default TaskSetupper(Tasks)
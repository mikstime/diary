import React, { Component } from 'react'
import OneDayTask from './oneDayTask'
import { TaskHolder, TasksHolder, TASK_STATUSES, CreateNewTask } from '../../TaskTemplates'
import produce from 'immer'
import uuid from 'uuid/v4'

import CreateDailyTaskMutation from '../CreateDailyTaskMutation'

class OneDayTasks extends Component {

    state = {
        tasks : []
    }

    handleCreation = task => {
        console.log(task)
        // CreateDailyTaskMutation(task.taskName, task.taskState,
        //     () => this.setState(produce(draft => {
        //         draft.tasks.push({...task, key : uuid()})
        //     }))
        // )
        this.setState(produce(draft => {
                    draft.tasks.push({...task, key : uuid()})
                }))
    }
    componentWillMount() {

    }

    render() {
        const { tasks } = this.state
        console.log(tasks)
        return(
            <TasksHolder>
                {tasks.map(task => <OneDayTask {...task}/>)}
                <CreateNewTask
                    onCreate={this.handleCreation}
                    Task={OneDayTask}/>
            </TasksHolder>
        )
    }
}

export default OneDayTasks
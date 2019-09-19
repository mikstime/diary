import React from 'react'
import './style.sass'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
export const TaskHolder = props => (
    <div className='task-holder' {...props}/>
)
export const TaskInput = props => {


    return(
        <input placeholder='Enter Task Name' className='task-input' { ...props }/>
    )
}

const TaskStatus = props => {

    const { state, ...rest } = props
    return(
        <div className={`task-status ${state}`} { ...rest }/>
    )
}
TaskStatus.propTypes = {
    state : PropTypes.string.isRequired,
    onClick : PropTypes.func
}
export {TaskStatus}
export const TASK_STATUSES = ['done', 'failed', 'in-progress']

export const CreateNewTask = props => {

    const { Task, onCreate, ...rest } = props
    const handleOnChange = taskData => {
        onCreate && onCreate({
            ...taskData
        })
    }
    return(
        <Task key={uuid()}
              onChange={handleOnChange} {...rest}/>
    )
}
export const TasksHolder = props => {
    return(
        <div className='tasks-holder' {...props}/>
    )
}
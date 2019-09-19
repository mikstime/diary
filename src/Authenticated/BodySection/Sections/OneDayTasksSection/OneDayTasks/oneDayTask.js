import React, { Fragment, useState, useRef, useEffect } from 'react'
import { TASK_STATUSES, TaskHolder, TaskInput, TaskStatus } from '../../TaskTemplates'
import OneDayTasks from './index'
import PropTypes from 'prop-types'

const useIsMount = () => {
    const isMountRef = useRef(true)

    useEffect(() => {
        isMountRef.current = false
    }, [])

    return isMountRef.current
};

const OneDayTask = props => {

    const { initialTaskState = 0, onChange } = props
    const [taskState, setTaskState] = useState(initialTaskState)
    const [taskName, setTaskName] = useState("")
    const isMount = useIsMount()
    const handleChange = event => {
        const taskName = event.target.value
        setTaskName(taskName)
    }
    const handleStatusChange = () => {
        setTaskState((taskState + 1) % TASK_STATUSES.length)
    }
    useEffect(() => {
        if(!isMount) {
            onChange && onChange({
                taskName, taskState
            })
        }
    })

    return(
        <TaskHolder>
            <TaskStatus state={TASK_STATUSES[taskState]} onClick={handleStatusChange}/>
            <TaskInput onChange={handleChange}/>
        </TaskHolder>
    )
}
OneDayTask.propTypes = {
    initialState : PropTypes.number
}

export default OneDayTask
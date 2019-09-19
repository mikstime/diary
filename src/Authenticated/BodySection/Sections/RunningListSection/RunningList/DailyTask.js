import './style.sass'
import  React, { Component } from 'react'
import ContentEditable from 'react-contenteditable'
import uuid from 'uuid/v4'
import sanitizeHTML from 'sanitize-html'
import PropTypes from 'prop-types'
import produce from 'immer'

class DailyTask extends Component {

    _timeoutID

    static propTypes = {
        days : PropTypes.arrayOf(PropTypes.object).isRequired,
        types : PropTypes.func.isRequired,
        numberOfTypes : PropTypes.number.isRequired,
        taskName : PropTypes.string.isRequired,
        // Events
        onTaskNameChange : PropTypes.func,
        onDayChange : PropTypes.func,
        onMouseOut : PropTypes.func,
        onKeyPress : PropTypes.func
    }
    constructor(props) {
        super(props)

        this.state = {
            days : this.props.days.map(day => ({
                    ...day,
                    id : uuid()
                })
            ),
            types : this.props.types,
            numberOfTypes : this.props.numberOfTypes,
            taskName : this.props.taskName
        }
    }
    handleClick(day) {
        const { numberOfTypes, days } = this.state
        const dayIndex = days.indexOf(day)

        if(~dayIndex)
            this.setState(
                produce(
                    ({days}) => {
                        days[dayIndex].state = ( day.state + 1 ) % numberOfTypes
                    }
                ),  () => this.props.onDayChange && this.props.onDayChange(this.state)
            )

    }
    handleTextChange = event => {
        this.setState(
            {
                taskName : sanitizeHTML(event.target.value,{
                    allowedTags : [],
                    allowedAttributes : []
                })
            },
            () => this.props.onTaskNameChange && this.props.onTaskNameChange(this.state)
        )
    }

    handleMouseOut = (event) => {
        this.props.onMouseOut && this.props.onMouseOut(event, this.state)
    }

    handleKeyPress = event => {

        this.props.onKeyPress && this.props.onKeyPress(event, this.state)
    }
    render() {

        const {days, types} = this.state
        return(
            <div className='daily-task'
                 onKeyPress={this.handleKeyPress}
                 onMouseLeave={this.handleMouseOut}>
                <div className='days'>
                    {days.map(
                        (day) =>
                            <span key={day.id}
                                onClick={ () => this.handleClick(day)}
                                className={types(day.state)}/>)
                    }
                </div>
                <ContentEditable
                        onChange={this.handleTextChange}
                        html={this.state.taskName}
                        tagName='p'
                />
            </div>
        )
    }
}

class AddTask extends Component {

    static propTypes = {
        onChange : PropTypes.func.isRequired,
    }
    state = {
        defaultState : {
            taskName : "Add New Task",
            days : [
                {state : 0},{state : 0},{state : 0},
                {state : 0},{state : 0},{state : 0},
                {state : 0}
            ],
            numberOfTypes : 4,
            types : type => {
                switch ( type ) {
                    default :
                    case 0 : return 'empty'
                    case 1 : return 'in-progress'
                    case 2 : return 'is-done'
                    case 3 : return 'was-failed'
                }
            },
        },
    }
    handleChange = (state) => {

        if(this._timeout)
            clearTimeout(this._timeout)
        this._timeout = setTimeout(
            () => this.props.onChange(state), 2000
        )
    }
    handleKeyPress = (event, state) => {
        if(this._timeout)
            clearTimeout(this._timeout)
        if(event.key === 'Enter') {
            this.props.onChange(state)
        }
    }
    render() {
        const {defaultState : {taskName, days, types, numberOfTypes} } = this.state
        return(
            <DailyTask key={uuid()} // The easiest way to create new component on rerender
                // according to the fact the previous version is still stored somewhere else
                       numberOfTypes={numberOfTypes}
                       onDayChange={this.handleChange}
                       onTaskNameChange={this.handleChange}
                       onKeyPress={this.handleKeyPress}
                       days={days}
                       types={types}
                       taskName={taskName}/>
        )
    }
}
export default DailyTask

export { AddTask }
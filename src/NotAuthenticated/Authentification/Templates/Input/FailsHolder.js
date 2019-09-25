import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class extends Component {

    static propTypes = {
        correctElems : PropTypes.array,
        timesFailed : PropTypes.number
    }
    render() {
        return React.Children
            .toArray(this.props.children)
            .map(
                (lastElement, i) => React.cloneElement(
                    lastElement, {
                        timesFailed : this.props.timesFailed,
                        isCorrect : this.props.correctElems && this.props.correctElems[i]
                    }
                )
            )
    }
}
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ValidatedInput extends Component {

    static propTypes = {
        inputProps : PropTypes.object.isRequired,
        validProps : PropTypes.object,
        invalidProps : PropTypes.object,
        onChange : PropTypes.func,
        validator : PropTypes.oneOfType([PropTypes.instanceOf(RegExp), PropTypes.func])
    }
    state = {
        isValid : true,
        input : ""
    }
    validateInput = input => {
        const { validator } = this.props

        if( validator instanceof RegExp) {
            return {
                isValid : validator.test(input),
                validatedInput : input
            }
        } else if( typeof validator === 'function') {
            return validator(input)
        }
        return {
            isValid : true,
            validatedInput : input
        }
    }
    handleChange = event => {
        const input = event.target.value

        const { isValid, validatedInput } = this.validateInput(input)

        this.setState({ isValid, input : validatedInput },
            () => this.props.onChange && this.props.onChange(this.state)
        )
    }
    render() {
        const {inputProps, validProps, invalidProps, ...style} = this.props
        return(
            <div {...style}>
                <input {...inputProps} onChange={this.handleChange}/>
                {
                    this.state.isValid ?
                        validProps && <div {...validProps}/> :
                        invalidProps && <div {...invalidProps}/>
                }
            </div>
        )
    }
}
export default ValidatedInput
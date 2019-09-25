import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ValidatedInput extends Component {

    static propTypes = {
        inputProps : PropTypes.object.isRequired,
        validProps : PropTypes.object,
        invalidProps : PropTypes.object,
        onChange : PropTypes.func,
        validator : PropTypes.oneOfType(
            [PropTypes.instanceOf(RegExp), PropTypes.func]),
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
                input
            }
        } else if( typeof validator === 'function') {
            return validator(input)
        }
        return {
            isValid : true,
            input
        }
    }
    handleChange = event => {

        const { isValid, input } = this.validateInput(event.target.value)

        this.setState({ isValid, input},
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
export const StyledValidatedInput = (props) => {
    const className = `${props.className || ''} validated-input`
    return (
        <ValidatedInput
            { ...props }
            className={ className }
            validProps={ {
                className : 'valid-input',
            } }
            invalidProps={ {
                className : 'invalid-input',
                children : '👎'
            } }
        />
    )
}
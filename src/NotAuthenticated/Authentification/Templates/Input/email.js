import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledValidatedInput as Input } from './ValidatedInput'
import { EmailRegEx } from '../../utils'

class EmailInput extends Component {

    static propTypes = {
        onChange : PropTypes.func
    }
    state = {
        email : null
    }
    handleEmailChange = res => {
        const { isValid, input } = res
        const { onChange } = this.props
        if(isValid) {
            this.setState({
                email : input
            }, () => onChange && onChange( this.state))
        } else {
            this.setState({
                email : null
            }, () => onChange && onChange( this.state))
        }

    }

    render() {
        return(
            <Input
                onChange={this.handleEmailChange}
                validator={EmailRegEx}
                inputProps={{
                    type : 'text',
                    name : 'email',
                    placeholder : 'Email'
                }}
            />
        )
    }

}

export default EmailInput
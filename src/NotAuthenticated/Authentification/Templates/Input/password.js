import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledValidatedInput as Input } from './ValidatedInput'
import { PassRegEx } from '../../utils'

class PasswordInput extends Component {

    static propTypes = {
        onChange : PropTypes.func
    }
    state = {
        password : null
    }

    handlePasswordChange = res => {
        const { isValid, input } = res
        const { onChange } = this.props
        if(isValid) {
            this.setState({
                password : input
            }, () => onChange && onChange(this.state))
        } else {
            this.setState({
                password : null
            }, () => onChange && onChange(this.state))
        }
    }

    render() {
        return(
            <Input
                onChange={this.handlePasswordChange}
                validator={PassRegEx}
                inputProps={{
                    type : 'password',
                    name : 'pass',
                    placeholder : 'Password'
                }}/>
        )
    }

}

export default PasswordInput
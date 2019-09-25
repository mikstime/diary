import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledValidatedInput as Input } from './ValidatedInput'
import { PassRegEx } from '../../utils'

class PasswordInput extends Component {

    render() {
        return(
            <Input
                {...this.props}
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
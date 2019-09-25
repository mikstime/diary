import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledValidatedInput as Input } from './ValidatedInput'
import { EmailRegEx } from '../../utils'

class EmailInput extends Component {


    render() {
        return(
            <Input
                {...this.props}
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
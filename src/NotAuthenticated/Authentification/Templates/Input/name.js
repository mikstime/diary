import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledValidatedInput as Input } from './ValidatedInput'
import { NameRegEx } from '../../utils'

class NameInput extends Component {

    render() {
        const {prefix = '', ...rest} = this.props
        return(
            <Input
                {...rest}
                validator={NameRegEx}
                inputProps={{
                    type : 'text',
                    name : 'name',
                    placeholder : `${prefix} Name`
                }}
            />
        )
    }

}

export default NameInput
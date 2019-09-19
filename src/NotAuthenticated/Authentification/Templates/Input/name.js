import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledValidatedInput as Input } from './ValidatedInput'
import { NameRegEx } from '../../utils'

class NameInput extends Component {

    static propTypes = {
        onChange : PropTypes.func
    }
    state = {
        name : null
    }
    handleEmailChange = res => {
        const { isValid, input } = res
        const { onChange } = this.props
        if(isValid) {
            this.setState({
                name : input
            }, () => onChange && onChange( this.state))
        } else {
            this.setState({
                name : null
            }, () => onChange && onChange( this.state))
        }

    }

    render() {
        const {prefix = ''} = this.props
        return(
            <Input
                onChange={this.handleEmailChange}
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
import React, { Component } from 'react'
import './style.sass'
import ValidatedInput from '../ValidatedInput'
import { EmailRegEx } from '../utils'
export default class Restore extends Component {

    render() {
        return(
            <div className='restore-holder'>
                <ValidatedInput
                    className='validated-input'
                    onChange={this.handleEmailChange}
                    validator={EmailRegEx}
                    inputProps={{
                        type : 'text',
                        name : 'email',
                        placeholder : 'Email'
                    }}/>
                <div className='restore-button'>Send Email</div>
            </div>
        )
    }
}
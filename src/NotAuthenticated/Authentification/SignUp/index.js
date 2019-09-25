import React, { Component } from 'react'
import './style.sass'
import {
    FallibleEmailInput as EmailInput,
    FalliblePasswordInput as PasswordInput,
    FallibleNameInput as NameInput,
    onInputChange
} from '../Templates/Input'

import SignUpMutation from './SignUpMutation'

import produce from 'immer'

export default class SignUp extends Component {

    state = { timesFailed : 0 }
    onInputChange = onInputChange(this)

    handleClick = e => {
        const { firstname, lastname, email, password } = this.state

        if( firstname && lastname && email && password ) {

            //@TODO change application state to authenticated
            SignUpMutation(firstname, lastname, email, password, e => console.log('res',e))
        } else {
            this.setState(produce(draft => {++draft.timesFailed}))
        }
    }
    render() {
        const { firstname, lastname, email, password } = this.state
        return(
            <div className='signup-holder'>
                    <NameInput isCorrect={firstname}
                               timesFailed={this.state.timesFailed}
                               onChange={this.onInputChange('firstname')}
                               prefix={`First`}/>
                    <NameInput isCorrect={lastname}
                               timesFailed={this.state.timesFailed}
                               onChange={this.onInputChange('lastname')}
                               prefix={`Last`}/>
                    <EmailInput isCorrect={email}
                                timesFailed={this.state.timesFailed}
                                onChange={this.onInputChange('email')}/>
                    <PasswordInput isCorrect={password}
                                   timesFailed={this.state.timesFailed}
                                   onChange={this.onInputChange('password')}/>
                <div
                    className='signup-button'
                    onClick={this.handleClick}>Sign Up</div>
            </div>
        )
    }
}
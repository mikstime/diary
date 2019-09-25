import React, { Component } from 'react'
import './style.sass'
import {
    FallibleEmailInput as EmailInput,
    FalliblePasswordInput as PasswordInput,
    FallibleNameInput as NameInput,
    onInputChange,
    FailsHolder
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
            SignUpMutation(firstname, lastname, email, password, res => {
                if(res) {
                    //this.props.onAuth && this.props.onAuth(res.session)
                }
            })

        } else {
            this.setState(produce(draft => {++draft.timesFailed}))
        }
    }
    render() {
        const { firstname, lastname, email, password } = this.state
        return(
            <div className='signup-holder'>
                <FailsHolder
                    correctElems={[firstname, lastname, email, password]}
                    timesFailed={this.state.timesFailed}>
                    <NameInput onChange={this.onInputChange('firstname')}
                               prefix={`First`}/>
                    <NameInput onChange={this.onInputChange('lastname')}
                               prefix={`Last`}/>
                    <EmailInput onChange={this.onInputChange('email')}/>
                    <PasswordInput onChange={this.onInputChange('password')}/>
                </FailsHolder>
                <div
                    className='signup-button'
                    onClick={this.handleClick}>Sign Up</div>
            </div>
        )
    }
}
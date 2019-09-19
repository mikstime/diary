import React, { Component } from 'react'
import './style.sass'
import {EmailInput, PasswordInput, NameInput} from '../Templates/Input'
import { NameRegEx, EmailRegEx, PassRegEx} from '../utils'

import SignUpMutation from './SignUpMutation'
export default class SignUp extends Component {

    state = {
        firstname : null,
        lastname : null,
        email : null,
        password : null
    }

    handleFirstNameChange = res => {
        const { isValid, input } = res

        if(isValid) {
            this.setState({
                firstname : input
            })
        } else {
            this.setState({
                firstname : null
            })
        }
    }
    handleLastNameChange = res => {
        const { isValid, input } = res

        if(isValid) {
            this.setState({
                lastname : input
            })
        } else {
            this.setState({
                lastname : null
            })
        }
    }
    handleEmailChange = res => {
        const { isValid, input } = res

        if(isValid) {
            this.setState({
                email : input
            })
        } else {
            this.setState({
                email : null
            })
        }
    }
    handlePasswordChange = res => {
        const { isValid, input } = res

        if(isValid) {
            this.setState({
                password : input
            })
        } else {
            this.setState({
                password : null
            })
        }
    }
    handleClick = e => {
        const { firstname, lastname, email, password } = this.state

        if( firstname && lastname && email && password ) {
            //@TODO commit mutation
            SignUpMutation(firstname, lastname, email, password, e => console.log('res' + e))
        } else {
            //@TODO become red
        }
    }
    render() {
        return(
            <div className='signup-holder'>
                    <NameInput prefix={`First`}
                               onChange={this.handleFirstNameChange}/>
                    <NameInput prefix={`Last`}
                               onChange={this.handleLastNameChange}/>
                    <EmailInput onChange={this.handleEmailChange}/>
                    <PasswordInput onChange={this.handlePasswordChange}/>
                <div
                    className='signup-button'
                    onClick={this.handleClick}>Sign Up</div>
            </div>
        )
    }
}
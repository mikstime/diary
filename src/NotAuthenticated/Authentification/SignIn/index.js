import React, { Component } from 'react'
import './style.sass'
import SignInMutation from './SignInMutation'
import {
    FallibleEmailInput as EmailInput,
    FalliblePasswordInput as PasswordInput,
    onInputChange} from '../Templates/Input'
export default class SignIn extends Component {

    state = { timesFailed : 0 }
    onInputChange = onInputChange(this)
    handleClick = () => {

        const {email, password} = this.state

        //@TODO replace 'SUCCESS'
        //@TODO add token to header
        if(email && password)
            SignInMutation(email, password, response => {
                if(response.status == 'SUCCESS') {
                    console.log("SUCCESS")
                } else {
                    console.log(response)
                }
            })
    }

    render() {
        const {email, password} = this.state
        return(
            <div className='signin-holder'>
                <EmailInput isCorrect={email}
                            timesFailed={this.state.timesFailed}
                            onChange={this.onInputChange('email')}/>
                <PasswordInput isCorrect={password}
                               timesFailed={this.state.timesFailed}
                               onChange={this.onInputChange('password')}/>
                <div className='signin-button' onClick={this.handleClick}>Sign In</div>
            </div>
        )
    }
}
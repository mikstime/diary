import React, { Component } from 'react'
import './style.sass'
import SignInMutation from './SignInMutation'
import { EmailInput, PasswordInput } from '../Templates/Input'
export default class SignIn extends Component {

    state = {
        email : null,
        password : null
    }
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

    handleEmailChange = ({email}) => {
        this.setState({email})
    }
    handlePasswordChange = ({password}) => {
        this.setState({password})
    }

    render() {
        return(
            <div className='signin-holder'>
                <EmailInput onChange={this.handleEmailChange}/>
                <PasswordInput onChange={this.handlePasswordChange}/>
                <div className='signin-button' onClick={this.handleClick}>Sign In</div>
            </div>
        )
    }
}
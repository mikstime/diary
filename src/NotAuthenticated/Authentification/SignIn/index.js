import React, { Component } from 'react'
import './style.sass'
import SignInMutation from './SignInMutation'
import produce from 'immer'
import {
    FallibleEmailInput as EmailInput,
    FalliblePasswordInput as PasswordInput,
    FailsHolder, onInputChange } from '../Templates/Input'

import { withCookies, Cookies } from 'react-cookie';
class SignIn extends Component {

    state = { timesFailed : 0 }
    onInputChange = onInputChange(this)
    handleClick = () => {

        const {email, password} = this.state

        if(email && password) {
            SignInMutation(email, password, res => {
                    if(res) {

                        if(res.signIn && res.signIn.session) {
                            const token =  res.signIn.session.token
                            this.props.cookies.set('token', token, { path: '/' });

                            this.props.onAuth && this.props.onAuth(res.signIn.session)
                        } else {
                            console.log('Failed')
                        }
                    }
            })
        } else {
            this.setState(produce(draft => {draft.timesFailed++}))
        }
    }

    render() {
        const {email, password} = this.state
        return(
            <div className='signin-holder'>
                <FailsHolder timesFailed={this.state.timesFailed}
                             correctElems={[email, password]}>
                    <EmailInput onChange={this.onInputChange('email')}/>
                    <PasswordInput onChange={this.onInputChange('password')}/>
                </FailsHolder>
                <div className='signin-button' onClick={this.handleClick}>
                    Sign In
                </div>
            </div>
        )
    }
}

export default withCookies(SignIn)
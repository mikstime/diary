import React, { Component, Fragment } from 'react'
import './style.sass'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import SignUp from './SignUp'
import SignIn from './SignIn'
import Restore from './Restore'
const SignUpSelected = () => (
    <Fragment>
        <h1>New To Diary?<br/>
            Sign Up Now </h1>
        <h2> Have an account? <Link to='/signin'>Sign In</Link></h2>
    </Fragment>
)

const SignInSelected = () => (
    <Fragment>
        <h1>Enjoy Diary<br/>
            Stay Brawe </h1>
        <h2> Need an account? <Link to='/signup'>Sign Up</Link></h2>
        <h3> Forgot password? <Link to='/restore'>Restore It</Link></h3>
    </Fragment>
)

const RestoreSelected = () => (
        <h1>Get instructions or <Link to='/signup'>RESTART</Link></h1>
)
export default class Authentication extends Component {
    render() {
        return(
            <div className='authentication-holder'>
                <Router>
                <div className='auth-selection'>
                    <Switch>
                        <Route exact path='/restore' component={RestoreSelected}/>
                        <Route exaxt path='/signin' component={SignInSelected}/>
                        <Route component={SignUpSelected}/>
                    </Switch>
                </div>
                    <Switch>
                        <Route exact path='/restore' component={Restore}/>
                        <Route exaxt path='/signin'
                               component={() => <SignIn onAuth={this.props.onAuth}/>}/>
                        <Route component={SignUp}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}
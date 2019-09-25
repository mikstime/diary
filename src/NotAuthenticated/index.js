import React, { Component } from 'react'
import './style.sass'
import Authentication from './Authentification'

export default class NotAuthenticatedApp extends Component {
    render() {
        return(
            <div className='not-authenticated-holder'>
                <Authentication onAuth={this.props.onAuth}/>
            </div>
        )
    }
}
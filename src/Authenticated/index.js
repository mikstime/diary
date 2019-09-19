import React, { Component } from 'react'
import './style.sass'
import BodySection from './BodySection'
export default class AuthenticatedApp extends Component {
    render() {
        return(
            <div className='authenticated-holder'>
                <BodySection/>
            </div>
        )
    }
}
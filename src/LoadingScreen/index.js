import React, { Component } from 'react'
import './style.scss'

export default class LoadingScreen extends Component {

    render() {
        return(
            <div className='loading-screen-holder'>
                <h1>
                    Web Page is Loading
                </h1>
            </div>
        )
    }
}
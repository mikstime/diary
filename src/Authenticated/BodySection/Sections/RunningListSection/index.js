import React, { Component } from 'react'
import RunningList from './RunningList'
import SectionTemplate from '../SectionTemplate'

export default class extends Component {

    render() {
        return(
            <SectionTemplate sectionName={"Running List"}>
                <RunningList/>
            </SectionTemplate>
        )
    }
}
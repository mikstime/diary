import React, { Component } from 'react'
import SectionHeader from './SectionHeader'
import PropTypes from 'prop-types'
import './style.sass'

import withDelete from './withDelete'
import withResize from './withResize'
class SectionTemplate extends Component {

    static propTypes = {
        onMove : PropTypes.func,//.isRequired,
        onResize : PropTypes.func,//.isRequired,
        onDelete : PropTypes.func,//.isRequired,
        sectionName: PropTypes.string.isRequired
    }

    render() {

        const { onMove, onResize, onDelete, sectionName, ...otherProps }= this.props
        return(
            <div className='section-holder'>
                <SectionHeader
                    sectionName={sectionName}
                    onMove={onMove}
                    onResize={onResize}
                    onDelete={onDelete}
                />
                <div className='section-body' {...otherProps}/>
            </div>
        )
    }
}

export default withResize(withDelete(SectionTemplate))
import React from 'react'
import './style.sass'
import PropTypes from 'prop-types'
import {DeleteTool, ResizeTool, MoveTool} from './Tools'
const SectionHeader = props => {
    const { onMove, onResize, onDelete, sectionName } = props
    return(
        <div className='section-header'>
            <h1>{sectionName}</h1>
            {onMove && <MoveTool onClick={onMove}/>}
            {onResize && <ResizeTool onClick={onResize}/>}
            {onDelete && <DeleteTool onClick={onDelete}/>}
        </div>
    )
}
SectionHeader.propTypes = {
    onMove : PropTypes.func,
    onResize : PropTypes.func,
    onDelete : PropTypes.func,
    sectionName : PropTypes.string.isRequired
}
export default SectionHeader
import React from 'react'
const Tool = props => (
    <div className='tool-base' {...props} />
)
export default Tool
export const MoveTool= props =>(
    <Tool{...props}>M</Tool>
)
export const ResizeTool = props =>(
    <Tool{...props}>R</Tool>
)
export const DeleteTool = props =>(
    <Tool{...props}>D</Tool>
)
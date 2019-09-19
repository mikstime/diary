import React from 'react'

export default function(WrappedComponent) {

    return class extends React.Component {

        state = {
            exists : true
        }
        handleDelete = e => {
            this.setState({exists : false})
        }
        render() {
            const {exists} = this.state
            return(
                exists && <WrappedComponent onDelete={this.handleDelete}{...this.props}/>
            )
        }
    }

}
import React from 'react'
export default function(WrappedComponent) {
    return class extends React.Component {

        state = {
            currentSize : 1,
            allSizes : ['small', 'medium', 'large', 'page-sized']
        }

        handleResize = () => {
            this.setState(
                state => ({
                    currentSize : (state.currentSize + 1) % state.allSizes.length
                })
            )
        }

        render() {

            const {allSizes, currentSize} = this.state

            return(
                <div className={allSizes[currentSize]}>
                    <WrappedComponent
                        onResize={this.handleResize}
                        {...this.props}/>
                </div>
            )
        }
    }
}
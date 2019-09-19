import React, { Component } from 'react'

export default function (WrappedComponent) {
    return class extends Component {
        state = {
            newTask : {
                taskName : "New Task",
                days : [
                    {state : 0},{state : 0},{state : 0},
                    {state : 0},{state : 0},{state : 0},
                    {state : 0}
                ],
            },
            taskProperties : {
                numberOfTypes : 4,
                types : type => {
                    switch ( type ) {
                        default :
                        case 0 : return 'empty'
                        case 1 : return 'in-progress'
                        case 2 : return 'is-done'
                        case 3 : return 'was-failed'
                    }
                },
            }
        }
        render() {
            return(
                <WrappedComponent
                    {...this.props}
                    {...this.state}
                />
            )
        }
    }
}
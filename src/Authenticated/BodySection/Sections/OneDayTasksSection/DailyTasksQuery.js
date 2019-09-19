import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import environment from '../../../Environment'

const mutation = graphql`
    query Tasks($input : ID!) {
        node(id) {
            ... on DailyTask {
                taskName
                state
            }
        }
    }
`
export default (taskName, state, callback) => {
    const variables = {
        input : {
            taskName, state
        }
    }
    commitMutation(
        environment,
        {
            mutation, variables,
            onCompleted : callback,
            onError : e => console.log(e)
        }
    )
}
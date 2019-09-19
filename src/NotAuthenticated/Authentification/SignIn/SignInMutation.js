import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import environment from '../../Environment'

const mutation = graphql`
    mutation SignInMutation( $input : SignInInput! ) {
        signIn(input: $input) {
            session {
                token
            }
            status
        }
    }
`
export default (email, password, callback) => {
    const variables = {
        input : {
            email, password
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
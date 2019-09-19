import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import environment from '../../Environment'

const mutation = graphql`
    mutation SignUpMutation( $input : SignUpInput! ) {
        signUp(input: $input) {
            status
        }
    }
`
export default (firstname, lastname, email, password, callback) => {
    const variables = {
        input : {
            firstname, lastname, email, password
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
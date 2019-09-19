import {
    Environment,
    Network,
    RecordSource,
    Store
} from 'relay-runtime'

const fetchQuery = (operation, variables) =>
    fetch('http://localhost:4000', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
            'Authorization' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAbWFpbC5ydSIsImlkIjoiNWQ3MTRiMjcyNGFhOWEwMDA3MzgwZDg2IiwiZXhwIjoxNTY4NjA2OTYxLCJpYXQiOjE1Njc3MDY5NjF9.5UNw06lKi8I54hnaAGTm9kd3xx_kgasQkoY6bpoAUh0"
        },
        body : JSON.stringify({
            query : operation.text,
            variables
        }),
    }).then(r => r.json())

const environment = new Environment(
    {
        network : Network.create(fetchQuery),
        store : new Store(new RecordSource())
    }
)
export default environment
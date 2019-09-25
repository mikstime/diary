import React, { useState, Suspense } from 'react'
import './style.sass'
import LoadingScreen from './LoadingScreen'
const AuthenticatedApp = React.lazy( () => import('./Authenticated'))
const NotAuthenticatedApp = React.lazy(() => import('./NotAuthenticated'))
function App(props) {

    const auth = (session) => {
        console.log(session)
        setIsAuthenticated(session)
    }
    const [ isAuthenticated, setIsAuthenticated ] = useState(null)
    return(
        <Suspense fallback={<LoadingScreen/>}>
            {isAuthenticated ? <AuthenticatedApp/> : <NotAuthenticatedApp onAuth={auth}/>}
        </Suspense>
    )
}

export default App

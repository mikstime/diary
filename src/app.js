import React, { useState, Suspense } from 'react'
import './style.sass'
import LoadingScreen from './LoadingScreen'
import PropTypes  from 'prop-types'
import { withCookies, Cookies } from 'react-cookie';


const AuthenticatedApp = React.lazy( () => import('./Authenticated'))
const NotAuthenticatedApp = React.lazy(() => import('./NotAuthenticated'))
function App(props) {

    const auth = () => {
        setIsAuthenticated(cookies.get('token'))
    }
    const { cookies } = props
    const [ isAuthenticated, setIsAuthenticated ] = useState(
        cookies.get('token') || null
    )
    return(
        <Suspense fallback={<LoadingScreen/>}>
            {isAuthenticated ? <AuthenticatedApp/> : <NotAuthenticatedApp onAuth={auth}/>}
        </Suspense>
    )
}
App.propTypes = {
    cookies : PropTypes.instanceOf(Cookies).isRequired
}

export default withCookies(App)

import React, { useState, Suspense } from 'react'
import './style.sass'
import LoadingScreen from './LoadingScreen'
const AuthenticatedApp = React.lazy( () => import('./Authenticated'))
const NotAuthenticatedApp = React.lazy(() => import('./NotAuthenticated'))
function App(props) {

  const [ isAuntentificated ] = useState(!true)
  return(
      <Suspense fallback={<LoadingScreen/>}>
        {isAuntentificated ? <AuthenticatedApp/> : <NotAuthenticatedApp/>}
      </Suspense>
  )

}

export default App

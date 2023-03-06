import { useState } from 'react'

import { LockIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import { Link, routes, navigate } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import LevlUserCell from 'src/components/LevlUser/LevlUserCell/LevlUserCell'
const LandingPage = () => {
  const { loading, isAuthenticated, logIn, logOut, getCurrentUser } = useAuth()
  const [user, setUser] = useState(null)
  const auth = getAuth()
  auth.onAuthStateChanged((newUser) => {
    if (newUser) {
      setUser(newUser.email)
      console.log('Hello')

      return (
        <>
          <p>Needs Testing</p>
          <LevlUserCell email={getCurrentUser}></LevlUserCell>
        </>
      )
    } else {
      setUser(false)
      console.log('Hello')
      return <p>Not Authorized</p>
    }
  })
  if (isAuthenticated) {
    //navigate(routes.providerDashboard())
  }

  /* onAuthStateChanged(useAuth, (user) => {
    if (user) {
      return <AuthCell email={user.email}></AuthCell>
    } else {
      return <p>Not Authorized</p>
    }
  })*/
  return (
    <>
      <MetaTags title="Landing" description="Landing page" />

      <Button
        leftIcon={<LockIcon />}
        onClick={async () => {
          if (isAuthenticated) {
            await logOut()
          } else {
            await logIn()
          }
        }}
        variant="outline"
      >
        {isAuthenticated ? user : 'Google Sign in'}
      </Button>
      {isAuthenticated ? (
        (console.log(user), (<LevlUserCell email={user}></LevlUserCell>))
      ) : (
        <p>Not Authenticated</p>
      )}
    </>
  )
}

export default LandingPage

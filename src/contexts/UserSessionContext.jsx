import React from 'react'
import { createContext, useState} from 'react'

export const UserSessionContext = createContext()

export const UserSessionProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [userName, setUserName] = React.useState(false);
    const [userEmail, setUserEmail] = React.useState(false)
    const [subscription, seSubscription] = React.useState('elite')

    return (
        <div>
          <UserSessionContext.Provider
            value={{ loggedIn, setLoggedIn, userName, setUserName, userEmail, setUserEmail, subscription, seSubscription }}
          >
            {children}
          </UserSessionContext.Provider>
        </div>
      )
}


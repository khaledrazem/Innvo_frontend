import React from "react";
import { createContext, useState } from "react";

export const UserSessionContext = createContext();

export const UserSessionProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [userName, setUserName] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState(false);
  const [subscription, setSubscription] = React.useState("elite");
  const [notifications, setNotifications] = React.useState(3);

  return (
    <div>
      <UserSessionContext.Provider
        value={{
          loggedIn,
          setLoggedIn,
          userName,
          setUserName,
          userEmail,
          setUserEmail,
          subscription,
          setSubscription,
          notifications,
          setNotifications,
        }}
      >
        {children}
      </UserSessionContext.Provider>
    </div>
  );
};

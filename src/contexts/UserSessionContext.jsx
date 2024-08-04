import React, { useRef } from "react";
import { createContext, useState } from "react";

export const UserSessionContext = createContext();

export const UserSessionProvider = ({ children }) => {
  const [userType, setUserType] = React.useState(null);

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [userName, setUserName] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState(false);
  const [subscription, setSubscription] = React.useState("essential");
  const [subscriptionDays, setSubscriptionDays] = React.useState(54);

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
          userType,
          setUserType,
          subscriptionDays,
          setSubscriptionDays,
        }}
      >
        {children}
      </UserSessionContext.Provider>
    </div>
  );
};

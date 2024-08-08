import React, { createContext, useState, useEffect } from "react";

// Create the UserSessionContext
export const UserSessionContext = createContext();

// UserSessionProvider component to manage user session state
export const UserSessionProvider = ({ children }) => {
  // Initialize state variables for user session
  const [userType, setUserType] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [subscription, setSubscription] = useState("essential");
  const [subscriptionDays, setSubscriptionDays] = useState(54);
  const [notifications, setNotifications] = useState(3);
  const [authToken, setAuthToken] = useState(null);

  // Load user session from local storage when the component mounts
  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    const storedUser = JSON.parse(localStorage.getItem("userSession"));
    if (storedToken && storedUser) {
      setAuthToken(storedToken);
      setLoggedIn(true);
      setUserName(storedUser.userName);
      setUserEmail(storedUser.userEmail);
      setUserType(storedUser.userType);
    }
  }, []);

  // Save user session to local storage whenever it changes
  useEffect(() => {
    const userSession = {
      userName,
      userEmail,
      userType,
    };
    if (authToken) {
      localStorage.setItem("authToken", authToken);
      localStorage.setItem("userSession", JSON.stringify(userSession));
    } else {
      localStorage.removeItem("authToken");
      localStorage.removeItem("userSession");
    }
  }, [authToken, userName, userEmail, userType]);

  // Function to handle user signup
  const handleSignup = async (data) => {
    try {
      const { name, email } = data;

      const response = await fetch(`${process.env.REACT_APP_API_DOMAIN}/cms/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const resp = await response.json();
      if (response.ok) {
        setAuthToken(resp.token);
        setUserName(name);
        setUserEmail(email);
        setLoggedIn(true);
        setUserType("basic");
      } else {
        console.error(resp.error);
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  // Function to handle user login
  const handleLogin = async (email, password) => {
    try {
      // Implement your login logic here, e.g., call an API
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (response.ok) {
        setAuthToken(data.token); // Store token received from backend
        setUserEmail(email);
        setLoggedIn(true);
        setUserName(data.name); // Use data from the backend
        setUserType(data.userType); // Use userType from backend
      } else {
        // Handle login error
        console.error(data.error);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  // Function to handle user logout
  const handleLogout = () => {
    setAuthToken(null);
    setLoggedIn(false);
    setUserName("");
    setUserEmail("");
    setUserType(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("userSession");
  };

  return (
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
        handleSignup, // Provide signup function to context
        handleLogin, // Provide login function to context
        handleLogout, // Provide logout function to context
      }}
    >
      {children}
    </UserSessionContext.Provider>
  );
};

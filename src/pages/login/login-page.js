import { Navigate, Route, Routes, useResolvedPath } from "react-router-dom";
import LandingPage from "./landing/landing";
import classes from "./login-page.module.css";
import SignInPage from "./sign-in/sign-in";
import SignUpPage from "./sign-up/sign-up";

function LoginPage() {
  const url = useResolvedPath("").pathname;

  return (
    <div className="App">
      <div className={classes.container}>
        <div className={classes.bubblecontainer}>
          <Routes>
            <Route path="/" element={<Navigate to="landing" replace />} />
            <Route path="sign-in" element={<SignInPage />} />
            <Route path="sign-up" element={<SignUpPage />} />

            <Route path="landing" element={<LandingPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "rsuite/dist/rsuite.min.css";
import DeveloperPage from "src/pages/developer/developer-page";
import LoginPage from "src/pages/login/login-page";
import "./App.css";
import "./variables.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Navigate to="/marketplace" replace />} />
            <Route path="/marketplace/*" element={<DeveloperPage />} />
            <Route path="/login/*" element={<LoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import InvoHeader from "./components/header/invo-header";
import "./variables.css";
import SideNavBar from "src/components/side-navbar/side-navbar";
import DeveloperPage from "src/pages/developer/developer-page";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import UserPage from "src/pages/user/user-page";

function App() {
  return (
    <div>
    <InvoHeader/>

    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="/dev" replace />} />
          <Route path="/dev/*" element={<DeveloperPage/>}/>
          <Route path="/user/*" element={<UserPage/>}/>

        </Route>
      </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;

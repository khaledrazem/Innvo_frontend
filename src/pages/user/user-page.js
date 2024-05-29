import logo from 'src/logo.svg';
import InvoHeader from 'src/components/header/invo-header'
import 'src/variables.css'
import SideNavBar from 'src/components/side-navbar/side-navbar';
import classes from './user-page.module.css'
import { BrowserRouter, Route, Routes,Navigate, useResolvedPath } from "react-router-dom";

function UserPage() {

  const url = useResolvedPath("").pathname;

  return (
    <div className="App">
      <SideNavBar/>

      <Routes>

          <Route path='/' element={<Navigate to='discover' replace />} />
      
      </Routes>

    </div>
  );
}

export default UserPage;

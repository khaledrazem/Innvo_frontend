
import 'src/variables.css'
import SideNavBar from 'src/components/side-navbar/side-navbar';
import classes from './developer-page.module.css'
import { BrowserRouter, Route, Routes,Navigate, useResolvedPath } from "react-router-dom";
import DiscoverPage from './discover/discover';
import ProductPage from './product/product';
import Footer from 'src/components/footer/footer';
import TestPage from './test/test';
import DashboardPage from './dashboard/dashboard';
import MyToolsPage from './my-tools/my-tools';
import CreateToolsPage from './create-tools/create-tools';
import EditToolsPage from './edit-tools/edit-tools';

function DeveloperPage() {

  const url = useResolvedPath("").pathname;

  return (
    <div className="App">
      <SideNavBar/>

      <div className={classes.devbody}>

      <Routes>

          <Route path='/' element={<Navigate to='discover' replace />} />
          <Route path='discover' element={<DiscoverPage/>} />
          <Route path='discover/product/:productId' element={<ProductPage/>} />
          <Route path='dashboard' element={<DashboardPage/>} />
          <Route path='my-tools' element={<MyToolsPage/>} />
          <Route path='my-tools/new' element={<CreateToolsPage/>} />
          <Route path='my-tools/edit/:toolId' element={<EditToolsPage/>} />

          <Route path='test' element={<TestPage/>} />

      </Routes>
      
      <Footer></Footer>

      </div>
    </div>
  );
}

export default DeveloperPage;

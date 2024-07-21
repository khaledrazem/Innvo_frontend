import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useResolvedPath,
} from "react-router-dom";
import Footer from "src/components/footer/footer";
import SideNavBar from "src/components/side-navbar/side-navbar";
import "src/variables.css";
import DashboardPage from "./dashboard/dashboard";
import classes from "./developer-page.module.css";
import DiscoverPage from "./discover/discover";
import EditToolsPage from "./edit-tools/edit-tools";
import MyToolsPage from "./my-tools/my-tools";
import ProductPage from "./product/product";
import TestPage from "./test/test";
import ProfilePage from "./profile/profile";
import InvoHeader from "src/components/header/invo-header";
import CommunityPage from "./community/community";
import SubscriptionsPage from "./subscriptions/subscriptions";
import NotificationsCenterPage from "./notifications/notifications-center";
import PinsCenterPage from "./pins/pins-center";
import WorkspacePage from "./workspace/workspace";
import { useContext, useEffect, useState } from "react";
import { UserSessionContext } from "src/contexts/UserSessionContext";
import ReportPage from "./report/report";

function DeveloperPage() {
  const url = useLocation();
  const navigate = useNavigate();
  const { userType } = useContext(UserSessionContext);

  useEffect(() => {
    console.log(userType);
    if (userType === null) {
      console.log("111111111");
      navigate("/");
      console.log(77777777);
    }
  }, [userType]);

  useEffect(() => {
    console.log("?????????????");
    console.log(url.pathname);
  }, [url]);

  return (
    <div className="App">
      <InvoHeader searchbar={url.pathname.includes("discover")} />

      <SideNavBar />

      <div className={classes.devbody}>
        <Routes>
          <Route path="/" element={<Navigate to="discover" replace />} />
          <Route path="discover" element={<DiscoverPage />} />
          <Route path="discover/product/:productId" element={<ProductPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="workspace" element={<WorkspacePage />} />

          <Route path="my-tools" element={<MyToolsPage />} />
          <Route path="my-tools/new" element={<EditToolsPage />} />
          <Route path="my-tools/edit/:toolId" element={<EditToolsPage />} />
          <Route path="my-tools/edit/preview" element={<ProductPage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="subscriptions" element={<SubscriptionsPage />} />
          <Route path="notifications" element={<NotificationsCenterPage />} />
          <Route path="pins" element={<PinsCenterPage />} />
          <Route path="report" element={<ReportPage />} />

          <Route path="profile" element={<ProfilePage />} />

          <Route path="test" element={<TestPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default DeveloperPage;

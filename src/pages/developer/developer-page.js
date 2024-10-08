import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import InvoHeader from "src/components/header/invo-header";
import SideNavBar from "src/components/side-navbar/side-navbar";
import "src/variables.css";
import Footer from "./../../components/footer/footer";
import CommunityPage from "./community/community";
import DashboardPage from "./dashboard/dashboard";
import classes from "./developer-page.module.css";
import DiscoverPage from "./discover/discover";
import EditToolsPage from "./edit-tools/edit-tools";
import MyToolsPage from "./my-tools/my-tools";
import NotificationsCenterPage from "./notifications/notifications-center";
import PinsCenterPage from "./pins/pins-center";
import ProductPage from "./product/product";
import ProfilePage from "./profile/profile";
import ReportPage from "./report/report";
import SubscriptionsPage from "./subscriptions/subscriptions";
import TestPage from "./test/test";
import WorkspacePage from "./workspace/workspace";

function DeveloperPage() {
  const url = useLocation();

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

          <Route path="pins" element={<MyToolsPage />} />
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
        <Footer></Footer>
      </div>
    </div>
  );
}

export default DeveloperPage;

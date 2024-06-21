import { useEffect, useState } from "react";
import { Pagination } from "rsuite";
import NotificationCard from "src/components/notification-card/notification-card";
import notificationDatajson from "src/data/notificationData.json";
import classes from "./notification-pages.module.css";

function NotificationsPage({ itemsPerPage = 5 }) {
  let notificationData = notificationDatajson.notifications;

  const [currentPage, setCurrentPage] = useState(1);

  let currentNotifications = notificationData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    currentNotifications = notificationData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [notificationData]);

  return (
    <div className={classes.pagination}>
      <div className={classes.paginationcontent}>
        <div className={classes.list}>
          {currentNotifications.map((notification, index) => (
            <NotificationCard key={index} notificationData={notification} />
          ))}
        </div>
      </div>
      <Pagination
        prev={true}
        next={true}
        total={currentNotifications.length / itemsPerPage}
        maxButtons={5}
        ellipsis={true}
        boundaryLinks={true}
        limit={itemsPerPage}
        activePage={currentPage}
        onChangePage={setCurrentPage}
      />
    </div>
  );
}

export default NotificationsPage;

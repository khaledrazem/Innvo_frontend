import { useContext, useEffect, useState } from "react";
import ToolSelections from "src/components/community-components/tool-selections/tool-selections";
import toolcommunityDatajson from "src/data/tools.json";
import classes from "./notifications-center.module.css";
import NotificationsPage from "src/components/notification-pages/notification-pages";
import { UserSessionContext } from "src/contexts/UserSessionContext";

function NotificationsCenterPage() {
  const [selectedTool, setSelectedTool] = useState(null);
  const { notifications } = useContext(UserSessionContext);

  let communityData = toolcommunityDatajson.toolsData;

  useEffect(() => {
    setSelectedTool(communityData[0]?.id);
  }, communityData);

  return (
    <div className={classes.container}>
      <ToolSelections
        selectedTool={selectedTool}
        setSelectedTool={setSelectedTool}
        toolsData={communityData}
      />

      {/* <div className={classes.bubblecontainer}>
        <h4 className={classes.header}>
          Notification Center <label>{notifications}</label>
        </h4>
        <br /> */}
      <div className={classes.pagescontainer}>
        <NotificationsPage></NotificationsPage>
      </div>

      {/* </div> */}

      <br />
    </div>
  );
}

export default NotificationsCenterPage;

import React from "react";
import SidebarComp from "./SidebarComp";

function Sidebar() {
  return (
    <div className="sidebar">
      <img src="./static/logo.png" alt="app-logo" className="app-logo"/>
      <SidebarComp
        img="Reports.png"
        title="Reports"
      />
      <SidebarComp
        img="Workspaces.png"
        title="Workspaces"
      />
      <SidebarComp
        img="Settings.png"
        title="Settings"
      />
    </div>
  );
}

export default Sidebar;

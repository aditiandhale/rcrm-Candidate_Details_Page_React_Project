import React from "react";
import "../styles/sidebar.scss";

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div>
        <i className="bx bxs-grid-circle"></i>
      </div>
      <div>
        <i className="bx  bx-user"></i>{" "}
      </div>
      <div>
        <i className="bx  bx-buildings"></i>{" "}
      </div>
      <div>
        <i className="bx  bx-user-square"></i>{" "}
      </div>
      <div>
        <i className="bx  bx-briefcase-alt-2"></i>{" "}
      </div>
      <div>
        <i className="bx  bx-envelope"> </i>
      </div>
      <div>
        <i className="bx  bx-calendar-week"></i>{" "}
      </div>
      <hr className="sidebar-divider" />
      <div>
        <i className="bx bx-dollar-circle"></i>{" "}
      </div>
      <div>
        <i className="bx bx-clock-3"></i>{" "}
      </div>
      <div>
        <i className="bx  bx-credit-card-alt"></i>{" "}
      </div>
      <div>
        <i className="bx  bx-cog"></i>
      </div>
      <div>
        <i className="bx  bx-dots-horizontal-rounded"></i>{" "}
      </div>
    </aside>
  );
};

export default Sidebar;

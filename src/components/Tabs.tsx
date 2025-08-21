import React, { useState } from "react";
import activitiesData from "../data/activities.json"; // adjust path
import "../styles/Tab.scss";

interface Activity {
  id: number;
  type: string;
  status: string;
  content: string;
  associations: string;
  assignee: string;
  date: string;
}

const Tabs: React.FC = () => {
  const [active, setActive] = useState("All");
  const tabs = ["All", "Notes & Calls", "Tasks", "Meeting", "Files"];
  const activities: Activity[] = activitiesData.activities;

  return (
    <div className="tabs-container">
      {/* Icon Row */}
      <div className="icon-row">
        <div className="icon-circle-tab">
          <i className="bx bx-note"></i>
        </div>
        <div className="icon-circle-tab">
          <i className="bx bx-phone-ring"></i>
        </div>
        <div className="icon-circle-tab">
          <i className="bx bx-check-circle"></i>
        </div>
        <div className="icon-circle-tab">
          <i className="bx bx-calendar-week"></i>
        </div>
      </div>

      {/* Tabs */}
      <div className="tab-list">
        {tabs.map((t) => (
          <div
            key={t}
            className={`tab ${active === t ? "active" : ""}`}
            onClick={() => setActive(t)}
          >
            {t}
          </div>
        ))}
      </div>

      {/* Activities List */}
      <div className="activities-list">
        {activities
          .filter((activity) => active === "All" || activity.type === active)
          .map((activity) => (
            <div key={activity.id} className="activity-item">
              <div className="activity-header">
                <div className="activity-type">
                  <div className="activity-icon">
                    <i className="bx bx-note"></i>
                  </div>
                  <span className="activity-type-text">{activity.type}</span>
                  <span className="activity-status">{activity.status}</span>
                </div>
              </div>

              <div className="activity-content">
                <p>{activity.content}</p>
              </div>

              <div className="activity-footer">
                <div className="activity-meta">
                  <span className="associations">{activity.associations}</span>
                  <div className="assignee-date-row">
                    <div className="assignee">
                      <i className="bx bx-user"></i>
                      <span>{activity.assignee}</span>
                    </div>
                    <div className="date">
                      <i className="bx bx-clock-3"></i>
                      <span>{activity.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Tabs;

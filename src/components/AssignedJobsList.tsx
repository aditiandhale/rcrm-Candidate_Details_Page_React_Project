import React, { useState } from "react";
import jobsData from "../data/assignedJobs.json";
import "../styles/AssignJobList.scss";

const AssignedJobsList: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Assigned Jobs");

  // all job IDs ON by default
  const [activeJobIds, setActiveJobIds] = useState(
    jobsData.map((job) => job.id)
  );

  const handleToggle = (id: number) => {
    setActiveJobIds((prev) =>
      prev.includes(id) ? prev.filter((jobId) => jobId !== id) : [...prev, id]
    );
  };

  const tabs = [
    "All Details",
    "Assigned Jobs",
    "Related Emails",
    "Candidate Questions",
    "Hotlists",
    "Related Deals",
    "Contact(s) Pitched",
  ];

  return (
    <div className="assigned-jobs">
      {/* Tabs */}
      <div className="tab-list-assign">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Show Header + Jobs List only for Assigned Jobs */}
      {activeTab === "Assigned Jobs" && (
        <>
          {/* Header */}
          <div className="jobs-list">
            <div className="jobs-header">
              <h3>Assigned Job to William Sample</h3>
              <div className="jobs-actions">
                <button className="btn-primary">Assign To Job</button>
                <button className="btn-outline">View All Assigned Jobs</button>
              </div>
            </div>

            {/* Jobs List */}

            {jobsData.map((job) => (
              <div key={job.id} className="job-item">
                {/* Column 1: Job Info */}
                {/* Column 1: Job Info */}
                <div className="job-column job-info">
                  <div className="job-inline">
                    <div className="job-avatar">{job.title.charAt(0)}</div>
                    <div className="job-details">
                      <div className="job-title">{job.title}</div>
                      <div className="job-company">{job.company}</div>
                    </div>
                  </div>
                </div>

                {/* Column 2: Candidate + Date */}
                <div className="job-column job-meta">
                  <div className="meta-item">
                    <i className="bx bx-user"></i>
                    <span>{job.candidate}</span>
                  </div>
                  <div className="meta-item">
                    <i className="bx bx-clock-3"></i>
                    <span>{job.assignedDate}</span>
                  </div>
                </div>

                {/* Column 3: Status */}
                <div className="job-column job-status">
                  <span
                    className={`status-badge ${job.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {job.status}
                  </span>
                </div>

                {/* Column 4: View Files */}
                <div className="job-column job-files">
                  <button className="btn-outline btn-sm">View Files</button>
                </div>

                {/* Column 5: Toggle Switch */}
                <div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={activeJobIds.includes(job.id)} // all ON by default
                      onChange={() => handleToggle(job.id)}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AssignedJobsList;

import React, { useState } from "react";
import { useCandidate } from "../store/CandidateContext";
import EditModal from "./EditModal";
import Tabs from "./Tabs";
import AssignedJobsList from "./AssignedJobsList";
import "../styles/CandidateDetails.scss";
import "../styles/Breadcrumb.scss";

const CandidateDetails: React.FC = () => {
  const { candidate } = useCandidate();
  const [editing, setEditing] = useState(false);

  if (!candidate) return <div>Loading...</div>;

  return (
    <div className="panel">
      {/* Left Section */}
      <div className="left-section">
        <div className="breadcrumb-wrapper">
          {" "}
          <div className="breadcrumb">
            {" "}
            <div className="breadcrumb-left">
              {" "}
              <span className="breadcrumb-link">Candidates</span>{" "}
              <i
                className="bx bx-chevron-right"
                style={{ color: "#2563eb", fontSize: "20px" }}
              ></i>{" "}
              <span className="breadcrumb-current">Robert Hardy</span>{" "}
              <span className="breadcrumb-id">ID - 231</span>{" "}
            </div>{" "}
            {/* this will now stick to right */}{" "}
            <div className="breadcrumb-right">
              {" "}
              <button className="action-buttons">
                Request Profile Update
              </button>{" "}
              <button className="action-buttons">Previous</button>{" "}
              <button className="action-buttons">Next</button>{" "}
            </div>{" "}
          </div>{" "}
        </div>
        {/* Candidate Info */}
        <div className="left-card">
          <div className="basic-row">
            {/* Avatar */}
            <div className="avatar">
              {candidate.name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")}
            </div>

            {/* Candidate Info */}
            <div className="candidate-info">
              <div className="name-row">
                <div className="name">{candidate.name}</div>

                {/* Social Icons */}
                <div className="social-icons">
                  <div className="icon-circles facebook">
                    <i className="bxl bx-facebook"></i>
                  </div>
                  <div className="icon-circles twitter">
                    <i className="bxl bx-twitter"></i>
                  </div>
                  <div className="icon-circles linkedin">
                    <i className="bxl bx-linkedin"></i>
                  </div>
                  <div className="icon-circles github">
                    <i className="bxl bx-github"></i>
                  </div>
                  <div className="icon-circles xing">
                    <i className="bxl bx-xing"></i>
                  </div>
                </div>
              </div>

              <div className="muted title-location">
                {candidate.title} • {candidate.location}
              </div>
            </div>
            {/* Right Side: Contact Button + Action Icons */}
            <div className="contact-actions">
              <button className="contact-btn">Contact Linked</button>
              <div className="action-icons">
                <div className="icon-box">
                  <i className="bxs-star"></i>
                </div>
                <div className="icon-box">
                  <i className="bxs-hot"></i>
                </div>
                <div className="icon-box">
                  <i
                    className="bxs-pencil"
                    onClick={() => setEditing(true)}
                  ></i>
                </div>
                <div className="icon-box">
                  <i className="bxs-dots-vertical-rounded"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="details">
            <div className="contact-row">
              <i className="bx bx-envelope"></i>
              <span>{candidate.email}</span>

              <i className="bx bx-phone-ring"></i>
              <span>{candidate.phone}</span>
            </div>
            <div className="user-detail">
              <i className="bx bx-user"></i>
              <span> Phyllis Yang</span>
              <i className="bx bx-history"></i>
              <span>Jul, 14, 2023, 4:04pm</span>
            </div>
          </div>

          {/* Info Table */}
          <div className="info-table">
            <div className="info-row">
              <strong>Current Organization:</strong>
              <div className="muted">{candidate.currentOrganization}</div>
            </div>
            <div className="info-row">
              <strong>Summary:</strong>
              <div className="muted">{candidate.summary}</div>
            </div>
            <div className="info-row">
              <strong>Skills:</strong>
              <div className="muted">{candidate.skills.join(", ")}</div>
            </div>
            <div className="info-row">
              <strong>Current Employment Status:</strong>
              <div className="muted">{candidate.currentEmploymentStatus}</div>
            </div>
            <div className="info-row">
              <strong>Available From:</strong>
              <div className="muted">{candidate.availableFrom}</div>
            </div>
            <div className="info-row">
              <strong>Date of Birth:</strong>
              <div className="muted">{candidate.dateOfBirth}</div>
            </div>
            <div className="info-row">
              <strong>Current Salary:</strong>
              <div className="muted">{candidate.currentSalary}</div>
            </div>
            <div className="info-row">
              <strong>Relevant Experience:</strong>
              <div className="muted">{candidate.relevantExperience}</div>
            </div>
            <div className="info-row">
              <strong>Notice Period:</strong>
              <div className="muted">{candidate.noticePeriod}</div>
            </div>

            <div className="info-row">
              <strong>Salary Expectation:</strong>
              <div className="muted">{candidate.salaryExpectation}</div>
            </div>
            <div className="info-row">
              <strong>Full Address:</strong>
              <div className="muted">{candidate.fullAddress}</div>
            </div>
            <div className="info-row">
              <strong>Status:</strong>
              <div className="muted">{candidate.status}</div>
            </div>
            <div className="info-row">
              <strong>Resume:</strong>
              <div className="muted">{candidate.resume}</div>
            </div>
            <div className="info-row">
              <strong>Salary Type:</strong>
              <div className="muted">{candidate.salaryType}</div>
            </div>
            <div className="info-row">
              <strong>Total Experience:</strong>
              <div className="muted">{candidate.totalExperience}</div>
            </div>

            <div className="info-row">
              <strong>Language Skills:</strong>
              <div className="muted">{candidate.languageSkills}</div>
            </div>
          </div>
        </div>

        {/* Assigned Jobs below Candidate Details */}
        <div className="assigned-card">
          <AssignedJobsList />
        </div>
      </div>

      {/* Right Section (Tabs) */}
      <div className="tabs-wrapper">
        <Tabs />
      </div>

      {/* Edit Modal */}
      {editing && (
        <EditModal onClose={() => setEditing(false)} initial={candidate} />
      )}
    </div>
  );
};

export default CandidateDetails;

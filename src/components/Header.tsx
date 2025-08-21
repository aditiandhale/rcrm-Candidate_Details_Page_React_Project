import React from "react";
import "../styles/Header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div style={{ position: "relative", width: "300px" }}>
        <i
          className="bx bx-search"
          style={{
            position: "absolute",
            inset: "0 auto 0 10px", // sticks it to the left, vertically centered
            display: "flex",
            alignItems: "center",
            fontSize: "20px",
            color: "#999",
          }}
        ></i>
        <input
          placeholder="Search Pipedrive"
          style={{
            width: "100%",
            padding: "10px 10px 10px 35px", // extra left padding for icon
            borderRadius: "8px",
            border: "1px solid #e6e9ef",
            backgroundColor: "#f3f2f2ff",
          }}
        />
      </div>

      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <div className="header-center">
          <img src=".\src\assets\logo.png" alt="Logo" className="header-logo" />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            className="icon-circle"
            style={{ background: "#3564c9ff" }} // Tailwind blue-600
          >
            <i
              className="bx bx-plus"
              style={{ fontSize: 20, color: "#fff" }}
            ></i>
          </div>

          {/* Vertical Line */}
          <div
            style={{
              width: "2px",
              height: "30px",
              background: "#d1d5db",
              marginRight: "12px",
            }}
          />

          <div className="icon-circle">
            <i
              className="bx bx-gift"
              style={{ fontSize: 25, color: "#374151" }}
            ></i>
          </div>
          <div className="icon-circle">
            <i
              className="bx bx-envelope"
              style={{ fontSize: 25, color: "#374151" }}
            ></i>
          </div>
          <div className="icon-circle">
            <i
              className="bx bx-bell"
              style={{ fontSize: 25, color: "#374151" }}
            ></i>
          </div>

          {/* Circle + Text */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                overflow: "hidden", // hides overflow to make it circular
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#dde4eeff",
              }}
            >
              <img
                src=".\src\assets\profile.jpeg"
                alt="profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <div
              style={{
                fontSize: 14,
                color: "#2e2f31ff",
                display: "flex",
                flexDirection: "column",
                lineHeight: "1.2",
              }}
            >
              <span style={{ fontWeight: 600 }}>Phyllis Yang</span>
              <span>Silicon Links Inc</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

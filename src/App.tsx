import React, { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import CandidateDetails from "./components/CandidateDetails";
import "../src/index.scss"; // Global layout
import "../src/styles/sidebar.scss"; // Sidebar styles

const App: React.FC = () => {
  useEffect(() => {
    const setVH = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    };

    setVH();
    window.addEventListener("resize", setVH);

    return () => window.removeEventListener("resize", setVH);
  }, []);

  return (
    <div className="app-root">
      <Sidebar />
      <div className="main-area">
        <Header />
        <div className="content-area">
          <CandidateDetails />
        </div>
      </div>
    </div>
  );
};

export default App;

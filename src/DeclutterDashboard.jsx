import React, { useState, useEffect } from "react";
import "./DeclutterDashboard.css";

const dummyData = {
  summary: {
    duplicates: 183,
    unusedApps: 12,
    tempFiles: "8.4 GB",
    totalSavings: "6.3 GB",
  },
  files: [
    {
      name: "screenshot_2021.png",
      type: "Image",
      size: "2.4 MB",
      status: "Duplicate",
      shameScore: "14 identical selfies 😬",
    },
    {
      name: "TikTok_v23.apk",
      type: "App",
      size: "88 MB",
      status: "Unused",
      shameScore: "Ignored for 254 days 🫠",
    },
    {
      name: "whatsapp_video_01.mp4",
      type: "Video",
      size: "250 MB",
      status: "Old",
      shameScore: "3 years in Downloads 👴",
    },
    {
      name: "invoice_august.pdf",
      type: "Document",
      size: "350 KB",
      status: "Safe",
      shameScore: "You're fine here 😇",
    },
  ],
};

function DeclutterDashboard() {
  const [tab, setTab] = useState("summary");
  const [challengeItems, setChallengeItems] = useState([]);

  useEffect(() => {
    const selected = dummyData.files.sort(() => 0.5 - Math.random()).slice(0, 3);
    setChallengeItems(selected);
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>🧹 Declutter AI</h1>
        <p className="tagline">Your brutally honest digital cleaning assistant 🤖</p>
      </header>

      <div className="assistant-box animated">
        <h3>🤖 Declutter Bot says:</h3>
        <p>"If you haven’t used it in 6 months, do you *really* need it?"</p>
      </div>

      <div className="progress-bar-container">
        <div className="progress-label">
          Estimated Space Recovery: {dummyData.summary.totalSavings}
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: "75%" }}></div>
        </div>
      </div>

      <section className="challenge">
        <h3>🎯 Declutter Challenge</h3>
        <ul>
          {challengeItems.map((item, i) => (
            <li key={i}>➡️ {item.name} — {item.size}</li>
          ))}
        </ul>
      </section>

      <div className="tabs">
        <button onClick={() => setTab("summary")} className={tab === "summary" ? "active" : ""}>📊 Summary</button>
        <button onClick={() => setTab("files")} className={tab === "files" ? "active" : ""}>📁 Files</button>
      </div>

      {tab === "summary" && (
        <div className="summary-cards">
          <div className="card shadow">
            <h3>{dummyData.summary.duplicates} Duplicate Photos</h3>
            <p>~1.5 GB</p>
          </div>
          <div className="card shadow">
            <h3>{dummyData.summary.unusedApps} Unused Apps</h3>
            <p>~2.2 GB</p>
          </div>
          <div className="card shadow">
            <h3>{dummyData.summary.tempFiles} in Temporary Files</h3>
          </div>
        </div>
      )}

      {tab === "files" && (
        <div className="file-list">
          {dummyData.files.map((file, idx) => (
            <div className="file-card shadow" key={idx}>
              <div>
                <strong>📄 {file.name}</strong>
                <p>{file.type} • {file.size}</p>
                <p className="shame">{file.shameScore}</p>
              </div>
              <div className="status-section">
                <p>Status: {file.status}</p>
                <button className="delete-btn">🗑️ Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DeclutterDashboard;

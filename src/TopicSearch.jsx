import React, { useState } from "react";
import topics from "./topics";
import "./App.css";

export default function TopicSearch() {
  const [search, setSearch] = useState("");

  const q = search.trim().toLowerCase();
  const filtered = topics.filter((t) =>
    t.name.toLowerCase().includes(q)
  );

  return (
    <div className="th-container">
      <h1 className="th-title">Topic Search</h1>

      <div className="th-search-wrapper">
        <svg className="th-search-icon" viewBox="0 0 24 24" aria-hidden>
          <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>

        <input
          aria-label="Search topics"
          className="th-search-input"
          placeholder="Search topics..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          autoFocus
        />

        {search && (
          <button
            className="th-clear-btn"
            onClick={() => setSearch("")}
            aria-label="Clear search"
            title="Clear"
          >
            ×
          </button>
        )}
      </div>

      <div className="th-grid">
        {filtered.length > 0 ? (
          filtered.map((t) => (
            <article key={t.id} className="th-card" tabIndex="0" aria-labelledby={`topic-${t.id}`}>
              <div className="th-card-header">
                <h3 id={`topic-${t.id}`} className="th-card-title">{t.name}</h3>
                <span className="th-badge">{t.category}</span>
              </div>
              <p className="th-card-meta">Category: {t.category}</p>
            </article>
          ))
        ) : (
          <p className="th-no-result">No topics found</p>
        )}
      </div>
    </div>
  );
}

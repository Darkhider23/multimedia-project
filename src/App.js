import React, { useState } from "react";

import CalculatorPage from "./pages/CalculatorPage";
import GraficPage from "./pages/GraficPage";
import SlideshowPage from "./pages/SlideshowPage";
import QuizPage from "./pages/QuizPage";

import "./style.css";  // Importă stilurile globale

export default function App() {
  const [page, setPage] = useState("calculator");

  function renderPage() {
  switch (page) {
    case "calculator":
      return <CalculatorPage title="Calculator" />;
    case "grafic":
      return <GraficPage title="Grafic" />;
    case "slideshow":
      return <SlideshowPage title="Slideshow" />;
    case "quiz":
      return <QuizPage title="Quiz" />;
    default:
      return <CalculatorPage title="Calculator" />;
  }
}


  return (
    <div className="app-container">
      <h1 className="app-title">Aplicații Multimedia</h1>
      <div className="app-layout">
        <nav className="app-nav">
          {["calculator", "grafic", "slideshow", "quiz"].map((p) => (
            <button
              key={p}
              className={`nav-button ${page === p ? "active" : ""}`}
              onClick={() => setPage(p)}
            >
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </nav>
        <main className="app-main">{renderPage()}</main>
      </div>
    </div>
  );
}

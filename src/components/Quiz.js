import React, { useState } from "react";

const questions = [
  {
    question: "Care este capitala Franței?",
    options: [
      { id: "a", text: "Berlin" },
      { id: "b", text: "Paris" },
      { id: "c", text: "Roma" },
    ],
    correct: "b",
  },
  {
    question: "Ce limbaj folosește React?",
    options: [
      { id: "a", text: "JavaScript" },
      { id: "b", text: "Python" },
      { id: "c", text: "Ruby" },
    ],
    correct: "a",
  },
  // adaugă 3 întrebări suplimentare aici
];

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[currentIndex];

  function handleSelect(id) {
    setSelected(id);
  }

  function handleNext() {
    if (selected === null) return;
    setShowResult(true);
  }

  function handleContinue() {
    setSelected(null);
    setShowResult(false);
    setCurrentIndex((prev) => (prev + 1) % questions.length);
  }

  const isCorrect = selected === currentQuestion.correct;

  return (
    <div className="quiz-container">
      <div className="quiz-question">{currentQuestion.question}</div>
      <div className="quiz-options">
        {currentQuestion.options.map(({ id, text }) => (
          <button
            key={id}
            className={`quiz-button ${selected === id ? "selected" : ""}`}
            onClick={() => handleSelect(id)}
            disabled={showResult}
          >
            {text}
          </button>
        ))}
      </div>

      {!showResult && (
        <button
          className="nav-button"
          onClick={handleNext}
          disabled={selected === null}
        >
          Verifică răspunsul
        </button>
      )}

      {showResult && (
        <>
          <div className={`quiz-result ${isCorrect ? "" : "incorrect"}`}>
            {isCorrect ? "Răspuns corect!" : "Răspuns greșit."}
          </div>
          <button className="nav-button" onClick={handleContinue}>
            Întrebarea următoare
          </button>
        </>
      )}
    </div>
  );
}

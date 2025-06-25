// src/components/Calculator.js
import React, { useState } from "react";
import "../style.css";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("Introduceți numere valide");
      return;
    }

    let res;
    switch (operation) {
      case "add":
        res = a + b;
        break;
      case "subtract":
        res = a - b;
        break;
      case "multiply":
        res = a * b;
        break;
      case "divide":
        if (b === 0) {
          setResult("Împărțire la zero interzisă!");
          return;
        }
        res = a / b;
        break;
      default:
        res = "Operație necunoscută";
    }
    setResult(res);
  };

  return (
    <div className="calculator-container">
      <h2>Calculator simplu</h2>

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Numărul 1"
      />

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Numărul 2"
      />

      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
      >
        <option value="add">Adunare (+)</option>
        <option value="subtract">Scădere (-)</option>
        <option value="multiply">Înmulțire (×)</option>
        <option value="divide">Împărțire (÷)</option>
      </select>

      <button onClick={calculate}>Calculează</button>

      {result !== null && <div className="calculator-result">Rezultat: {result}</div>}
    </div>
  );
}

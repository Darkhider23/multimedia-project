import React, { useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import "../style.css";

export default function Grafic() {
  const [data, setData] = useState([
    { name: "25.06.2025", valoare: 30 },
    { name: "26.06.2025", valoare: 45 },
    { name: "27.06.2025", valoare: 20 },
  ]);
  const [date, setDate] = useState("");
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date || !value) return;

    setData((prevData) => {
      // Caută dacă data există deja
      const index = prevData.findIndex((item) => item.name === date);

      if (index !== -1) {
        // Creează o copie a datelor pentru a evita mutarea state-ului direct
        const newData = [...prevData];
        newData[index] = { ...newData[index], valoare: Number(value) };
        return newData;
      } else {
        // Adaugă o nouă intrare
        return [...prevData, { name: date, valoare: Number(value) }];
      }
    });

    // Curăță inputurile
    setDate("");
    setValue("");
  };

  return (
    <div className="grafic-container">
      <h2>Grafic Zilnic</h2>
      <form className="grafic-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Data (zz.mm.yyyy)"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          pattern="\d{2}\.\d{2}\.\d{4}"
          title="Format: zz.mm.yyyy"
          required
        />
        <input
          type="number"
          placeholder="Valoare"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
          min="0"
        />
        <button type="submit">Adaugă / Modifică</button>
      </form>

      <div className="chart-wrapper">
        <LineChart width={400} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="valoare" stroke="#8884d8" />
        </LineChart>
      </div>
    </div>
  );
}
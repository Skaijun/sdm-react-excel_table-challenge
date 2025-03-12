import "./App.css";

const initValues = [
  [
    {
      value: "",
      readOnly: true,
    },
    {
      value: "A",
      readOnly: true,
    },
    {
      value: "B",
      readOnly: true,
    },
    {
      value: "C",
      readOnly: true,
    },
    {
      value: "D",
      readOnly: true,
    },
  ],
  [
    {
      value: "1",
      readOnly: true,
    },
    {
      value: "",
      readOnly: false,
    },
    {
      value: "",
      readOnly: false,
    },
    {
      value: "",
      readOnly: false,
    },
    {
      value: "",
      readOnly: false,
    },
  ],
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          React.js Mock Interview Live Coding 2025 - Tier 1 Tech Company (Build
          Google Sheets)
        </p>
      </header>
      <section className="solution">
        {initValues.map((row, rowIndex) => (
          <div key={Math.random() + rowIndex} className="row">
            {row.map((cell, cellIndex) => (
              <input
                key={Math.random() + cellIndex}
                className={`cell ${cell.readOnly ? "readOnly" : ""}`}
                value={cell.value}
                disabled={cell.readOnly}
              />
            ))}
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;

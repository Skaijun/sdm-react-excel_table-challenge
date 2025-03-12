import { useState } from "react";
import "./App.css";
import Cell from "./components/Cell";

const initValue = [
  { id: "A", value: "", computedValue: "" },
  { id: "B", value: "", computedValue: "" },
  { id: "C", value: "", computedValue: "" },
  { id: "D", value: "", computedValue: "" },
];

function App() {
  const [table, setTable] = useState(initValue);

  const handleInputChange = (id, inputValue) => {
    const currentCell = table.find((cell) => cell.id === id);
    if (!currentCell) {
      console.log("Cell not found");
      return;
    }

    const regExp = new RegExp(/[A-D]+/);
    if (regExp.test(inputValue)) {
      // inputValue.toUpperCase();
      setTable((prevTable) => {
        const newTable = [...prevTable];
        const cellToUpdate = newTable.find((cell) => cell.id === id);
        if (!cellToUpdate.value) {
          cellToUpdate.value = inputValue.toUpperCase();
          cellToUpdate.computedValue = inputValue.toUpperCase();
          return newTable;
        }

        cellToUpdate.value = cellToUpdate.value + inputValue.toUpperCase();
        cellToUpdate.computedValue = inputValue.toUpperCase();
        function getCell(cellId) {
          return newTable.find((cell) => cell.id === cellId);
        }
        const firstCell = getCell(inputValue.toUpperCase());
        const secondCell = getCell(cellToUpdate.value);
        cellToUpdate.computedValue =
          Number(firstCell.computedValue) + Number(secondCell.computedValue);

        return newTable;
      });
    } else {
      setTable((prevTable) => {
        const newTable = [...prevTable];
        const cellToUpdate = newTable.find((cell) => cell.id === id);
        cellToUpdate.value = inputValue;
        cellToUpdate.computedValue = inputValue;

        return newTable;
      });
    }

    const currentCellValue = currentCell.value;
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          React.js Mock Interview Live Coding 2025 - Tier 1 Tech Company (Build
          Google Sheets)
        </p>
      </header>
      <section className="solution">
        <div className="sheet__wrapper">
          {table.map((cell) => {
            return (
              <Cell
                key={cell.id}
                id={cell.id}
                value={cell.value}
                onInputChange={handleInputChange}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default App;

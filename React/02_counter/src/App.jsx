import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(5);

  const addValue = () => {
    setCounter(prevCounter => {
      const updatedCounter = prevCounter + 1;
      if (updatedCounter > 10) {
        return 10;
      }
      console.log("Added value", updatedCounter);
      return updatedCounter;
    });
  };

  const removeValue = () => {
    setCounter(prevCounter => {
      const updatedCounter = prevCounter - 1;
      if (updatedCounter < 0) {
        return 0;
      }
      console.log("Removed value", updatedCounter);
      return updatedCounter;
    });
  };

  return (
    <>
      <h1>Counter Project with Hooks</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;

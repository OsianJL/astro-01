import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Counter</h1>
      <p style={{ fontSize: "2rem", margin: "1rem 0" }}>Count: {count}</p>
      <div>
        <button
          onClick={increment}
          style={{ margin: "0.5rem", padding: "0.5rem 1rem" }}
        >
          Increment
        </button>
        <button
          onClick={decrement}
          style={{ margin: "0.5rem", padding: "0.5rem 1rem" }}
        >
          Decrement
        </button>
        <button
          onClick={reset}
          style={{
            margin: "0.5rem",
            padding: "0.5rem 1rem",
            backgroundColor: "red",
            color: "white",
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;

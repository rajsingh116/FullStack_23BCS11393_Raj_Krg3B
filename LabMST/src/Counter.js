import React, { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");


const increment = () => {
  if (count + 1 <= 10) {
    setCount(prev => {
      const newCount = prev + 1;
      if (newCount === 10) {
        setMessage("Maximum limit reached!");
      } else {
        setMessage("");
      }
      return newCount;
    });
  }
};


  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setMessage("");
    }
  };

  useEffect(() => {
    if (count === 10) {
      const timer = setTimeout(() => {
        setCount(0);
        
      }, 200000);

      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={decrement} disabled={count === 0}>
         Decrement
      </button>
      <button onClick={increment} disabled={count === 10}>
         Increment
      </button>
      <p style={{ color: "red" }}>{message}</p>
    </div>
  );
}

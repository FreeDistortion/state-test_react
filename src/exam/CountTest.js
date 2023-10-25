import React from "react";
import { useState } from "react";

const CountTest = () => {
  const [n, setN] = useState(0);

  return (
    <div>
      <div>{n}</div>
      <button onClick={() => setN(n+1)}>+</button>
      <button onClick={() => setN(n-1)}>-</button>
    </div>
  );
};

export default CountTest;

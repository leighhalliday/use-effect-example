import React, { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`The count is ${count}`);
  });

  return (
    <div>
      <p>Count is {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increase
      </button>
    </div>
  );
}

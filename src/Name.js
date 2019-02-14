import React, { useState, useEffect } from "react";

export default function Listen() {
  const [name, setName] = useState("");

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  return (
    <div>
      <input
        type="text"
        onChange={e => {
          setName(e.target.value);
        }}
        value={name}
      />
    </div>
  );
}

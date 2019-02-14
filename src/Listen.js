import React, { useRef, useEffect } from "react";

export default function Listen() {
  const listener = useRef(null);

  useEffect(() => {
    listener.current = () => {
      console.log("I have been resized");
    };
    window.addEventListener("resize", listener.current);

    return () => {
      window.removeEventListener("resize", listener.current);
    };
  }, []);

  return <div>resize me</div>;
}

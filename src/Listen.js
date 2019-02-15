import React, { useEffect } from "react";

export default function Listen() {
  useEffect(() => {
    const listener = () => {
      console.log("I have been resized");
    };
    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);

  return <div>resize me</div>;
}

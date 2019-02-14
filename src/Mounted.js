import React, { useEffect } from "react";

export default function Mounted() {
  useEffect(() => {
    console.log("mounted");
  }, []);

  return <div>This component has been mounted.</div>;
}

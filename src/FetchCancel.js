import React, { useState, useEffect } from "react";

export default function FetchCancel({ url }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    let controller = new AbortController();

    const loadData = async () => {
      try {
        const response = await fetch(url, { signal: controller.signal });
        const data = await response.json();
        console.log("FetchCancel: got response");
        setData(data);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("FetchCancel: caught abort");
        } else {
          throw error;
        }
      }
    };
    loadData();

    return () => {
      console.log("FetchCancel: unmounting");
      controller.abort();
    };
  }, [url]);

  if (!data) {
    return <div>Loading data from {url}</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}

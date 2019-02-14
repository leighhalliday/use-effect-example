import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Fetcher({ url }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    let mounted = true;

    const loadData = async () => {
      const response = await Axios.get(url);
      if (mounted) {
        setData(response.data);
      }
    };
    loadData();

    return () => {
      mounted = false;
    };
  }, [url]);

  if (!data) {
    return <div>Loading data from {url}</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}

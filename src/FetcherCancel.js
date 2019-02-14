import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Fetcher({ url }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    let source = Axios.CancelToken.source();

    const loadData = async () => {
      try {
        const response = await Axios.get(url, {
          cancelToken: source.token
        });
        setData(response.data);
      } catch (error) {
        if (Axios.isCancel(error)) {
          console.log(`call for ${url} was cancelled`);
        } else {
          throw error;
        }
      }
    };
    loadData();

    return () => {
      source.cancel();
    };
  }, [url]);

  if (!data) {
    return <div>Loading data from {url}</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}

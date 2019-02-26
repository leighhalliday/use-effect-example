import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function AxiosCancel({ url }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    let source = Axios.CancelToken.source();

    const loadData = async () => {
      try {
        const response = await Axios.get(url, {
          cancelToken: source.token
        });
        console.log("AxiosCancel: got response");
        setData(response.data);
      } catch (error) {
        if (Axios.isCancel(error)) {
          console.log("AxiosCancel: caught cancel");
        } else {
          throw error;
        }
      }
    };
    loadData();

    return () => {
      console.log("AxiosCancel: unmounting");
      source.cancel();
    };
  }, [url]);

  if (!data) {
    return <div>Loading data from {url}</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}

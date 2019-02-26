import React, { useState, useEffect } from "react";
import Listen from "./Listen";
import Name from "./Name";
import Mounted from "./Mounted";
import Counter from "./Counter";
import Fetcher from "./Fetcher";
import AxiosCancel from "./AxiosCancel";
import FetchCancel from "./FetchCancel";

function App() {
  const [listen, setListen] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMounted(false);
    }, 500);
  }, []);

  return (
    <div>
      <Counter />
      <hr />

      <Mounted />
      <hr />

      <Name />
      <hr />

      <button
        onClick={() => {
          setListen(!listen);
        }}
      >
        {listen ? "stop" : "start"} listening
      </button>
      {listen ? <Listen /> : null}
      <hr />

      <Fetcher url="https://reqres.in/api/users/1?delay=2" />
      <hr />

      {mounted && (
        <>
          <AxiosCancel url="https://reqres.in/api/users/2?delay=2" />
          <hr />
          <FetchCancel url="https://reqres.in/api/users/3?delay=2" />
          <hr />
        </>
      )}
    </div>
  );
}

export default App;

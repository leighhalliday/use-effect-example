import React, { useState, useEffect } from "react";
import Listen from "./Listen";
import Name from "./Name";
import Mounted from "./Mounted";
import Counter from "./Counter";
import Fetcher from "./Fetcher";
import FetcherCancel from "./FetcherCancel";

function App() {
  const [listen, setListen] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMounted(false);
    }, 1000);
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

      <Fetcher url="https://reqres.in/api/users/2?delay=2" />
      <hr />

      {mounted ? (
        <>
          <FetcherCancel url="https://reqres.in/api/users/2?delay=2" />
          <hr />
        </>
      ) : null}
    </div>
  );
}

export default App;

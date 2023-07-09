import React, { useState } from "react";
import "../App.css";

export const Home = () => {
  const [setGreet, setSetGreet] = useState(" welcome Geast ");
  return (
    <>
      <h1> this is a home component.</h1>
      <h2>{setGreet}</h2>
      <button
        className="btn btn-primary"
        onClick={() => setSetGreet("Hello Rahul Srivastava")}
      >
        Change
      </button>
    </>
  );
};

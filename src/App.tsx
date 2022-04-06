import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getData } from "./api/covid";

function App() {
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <p>aa</p>
    </div>
  );
}

export default App;

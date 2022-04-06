import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getCountriesDate, getDailyDate, getData } from "./api/covid";

function App() {
  useEffect(() => {
    getCountriesDate("japan");
  }, []);
  return (
    <div className="App">
      <p>aa</p>
    </div>
  );
}

export default App;

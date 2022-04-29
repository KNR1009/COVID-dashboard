import React, { useEffect } from "react";
import "./App.css";
import { getCountriesDate, getDailyDate, getData } from "./api/covid";
import Cards from "./features/covid/Cards/Cards";

function App() {
  useEffect(() => {
    getCountriesDate("japan");
  }, []);
  return (
    <div className="App">
      <Cards></Cards>
    </div>
  );
}

export default App;

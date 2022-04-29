import React, { useRef } from "react";
import styles from "./Cards.module.css";
import CountUp from "react-countup";

import { useSelector } from "react-redux";
import { selectData } from "../covidSlice";

const Cards = () => {
  const RefSample = useRef<any>(null);
  const onClick = () => {
    console.log(RefSample);
  };

  return (
    <div>
      {/* <p ref={RefSample}>テストです</p> */}
      <button onClick={onClick}>ぼたん</button>
      <table>
        <tbody ref={RefSample}>
          <tr>
            <td>The table body</td>
            <td>with two columns</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cards;

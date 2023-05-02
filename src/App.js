import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [number, setNumber] = useState("");
  const [reverse, setReversed] = useState("0");
  const [difference, setDifference] = useState("0");

  // const numChange = useEffect(() => {
  //   setDifference(differenceInput());
  // }, [numChange]);

  //note : handleInput() is the default func provided by template
  function handleInput(event) {
    //validasi
    if (event >= 0) {
      setNumber(event.replace(/[. ,]/g, ""));
    }
  }

  function reset(event) {
    event.preventDefault();
    setNumber("");
    setReversed("");
    setDifference(0);
  }

  function processInput() {
    let resultReserved =
      parseInt(number.toString().split("").reverse().join("")) *
      Math.sign(number);

    let resultDifference = Math.abs(number - resultReserved);

    setReversed(resultReserved);
    setDifference(resultDifference);
  }

  // function processInput(event) {
  //   setReversed(reverseInput(number));
  //   setDifference(differenceInput(difference));
  //   //setDifference(numChange);
  //   event.preventDefault();
  // }

  //reverse
  // function reverseInput(n) {
  //   return parseInt(n.toString().split("").reverse().join("")) * Math.sign(n);
  // }

  //difference
  // function differenceInput() {
  //   // number;
  //   // reverse;
  //   return parseInt(Math.abs(number - reverse));
  // }

  return (
    <div className="App">
      <div>
        Number:
        <input
          type="number"
          id="number"
          value={number}
          onChange={(event) => handleInput(event.target.value)}
          required
        />
        <button type="submit" onClick={processInput}>
          Submit
        </button>
        <button type="reset" onClick={reset}>
          Reset
        </button>
      </div>
      <div>Result: {reverse}</div>
      <div>Difference: {difference}</div>
    </div>
  );
}

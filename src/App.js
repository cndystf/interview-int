import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [number, setNumber] = useState("");
  const [reverse, setReversed] = useState(number);
  const [difference, setDifference] = useState(setNumber, setReversed);

  // const numChange = useEffect(()=> {
  //    setDifference(differenceInput());
  // }, [numChange]);

  function handleNumber(event) {
    setNumber(event.target.value);
  }

  //note : handleInput() is the default func provided by template
  function handleInput() {
    setReversed(reverseInput(number));
    setDifference(differenceInput(difference));
  }

  function reset(event) {
    event.preventDefault();
    setNumber("");
    setReversed("");
    setDifference("");
  }

  //reverse
  function reverseInput(n) {
    return parseInt(n.toString().split("").reverse().join("")) * Math.sign(n);
  }

  function differenceInput() {
    number;
    reverse;
    return parseInt(Math.abs(number - reverse));
  }

  return (
    <div className="App">
      <div>
        Number:
        <input
          type="number"
          id="number"
          value={number}
          onChange={handleNumber}
          required
        />
        <button type="submit" onClick={handleInput}>
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

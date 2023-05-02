import "./styles.css";
import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState("");
  const [update, setUpdated] = useState(number);
  // const [difference, setDifference] = useState(setNumber, setUpdated);
  // const [difference, setDifference] = useState(setNumber, setUpdated);
  const [difference, setDifference] = useState(number, update);

  function handleNumber(event) {
    setNumber(event.target.value);
  }

  //note : handleInput() is the default func provided by template
  function handleInput() {
    // reverseInput(number);
    setUpdated(reverseInput(number));
    setDifference(differenceInput(number, setUpdated));

    // let reverseResult = reverseInput(number);
    // setUpdated = reverseResult;

    // let differenceResult = differenceInput(setNumber, setUpdated);
    // setDifference = differenceResult;

    // setUpdated (reverseInput());
    // return parseInt(n.toString().split("").reverse().join("")) * Math.sign(n);
    // let number = setUpdated(number);
    // reverseInput(number);
    // setUpdated(number);
    // function reverseInput() {
    //   let n = handleNumber();
    //   return parseInt(n.toString().split("").reverse().join("")) * Math.sign(n);
    // }
    // return reverseInput;
  }

  function reverseInput(n) {
    return parseInt(n.toString().split("").reverse().join("")) * Math.sign(n);
  }

  function differenceInput(n1, n2) {
    return parseInt(Math.abs(n1 - n2));
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
      </div>
      <div>Result: {update}</div>
      <div>Difference: {difference}</div>
    </div>
  );
}

import { useState } from "react";

// My way
// export default function App() {
//  //note this currentDate should be in useSate as it not really needed in thi case
//   const [currentDate] = useState(new Date());
//   const [step, setStep] = useState(1);
//   const [count, setCount] = useState(0);
//   const [sentence, setSentence] = useState(
//     `Today is ${currentDate.toDateString()}`,
//   );

//   function HandleStepNext() {
//     setStep((s) => s + 1);
//   }
//   function HandleStepPrevious() {
//     if (step > 1) setStep((s) => s - 1);
//   }

//   function HandleCountNext() {
//     setCount((count) => count + 1 * step);
//     const c = count + 1 * step;
//     HandleSentence(c);
//   }
//   function HandleCountPrevious() {
//     setCount((count) => count - 1 * step);
//     const c = count - 1 * step;
//     HandleSentence(c);
//   }

//   function HandleSentence(c) {
//     console.log(c);
//     if (c > 0) {
//       const targetDate = new Date(
//         currentDate.setDate(currentDate.getDate() + step),
//       );
//       setSentence(`${c} day(s) from today is ${targetDate.toDateString()}`);
//     } else if (c < 0) {
//       const targetDate = new Date(
//         currentDate.setDate(currentDate.getDate() - step),
//       );
//       setSentence(`${Math.abs(c)} days ago was ${targetDate.toDateString()}`);
//     } else if (c === 0) {
//       setSentence(`Today is ${currentDate.toDateString()}`);
//     }
//   }

//   return (
//     <div className="app">
//       <div className="row">
//         <button onClick={HandleStepPrevious}>-</button>
//         Step: {step}
//         <button onClick={HandleStepNext}>+</button>
//       </div>
//       <div className="row">
//         <button onClick={HandleCountPrevious}>-</button>
//         Count: {count}
//         <button onClick={HandleCountNext}>+</button>
//       </div>
//       <div className="row">{sentence}</div>
//     </div>
//   );
// }

//Instructor way

export default function App() {
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + Number(count));

  return (
    <>
      <div>
        {/* <button onClick={() => setStep((s) => (s > 1 ? s - 1 : s))}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button> */}
        <input
          type="range"
          min={1}
          max={10}
          onChange={(e) => setStep(parseInt(e.target.value))}
          defaultValue={step}
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={() => setCount((c) => Number(c) - 1 * step)}>-</button>
        {/* <span>Count: {count}</span>
         */}
        {/* <input type="text" placeholder="count" value={count} />,
        by setting value only, it makes the text readonly<=!!!!!!!!!!  */}
        <input
          type="text"
          placeholder="count"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />

        <button onClick={() => setCount((c) => Number(c) + 1 * step)}>+</button>
      </div>
      <p>
        <span>
          {/* {count === 0
            ? "Today is "
            : count > 0
              ? `${count} days from today is `
              : count < 0
                ? `${count} days ago was`
                : ""} */}
          {/* note it might lag sometimes, wait for it maybe */}
          {count === 0 && "Today is "}
          {count > 0 && `${count} days from today is `}
          {count < 0 && `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {/* <button
        className="reset-button"
        style={{ display: count !== 0 || step !== 1 ? "inline-block" : "none" }}
        onClick={() => {
          setCount(0);
          setStep(1);
        }}
      >
        Reset
      </button>
       better not to render it using css, instead use it by conditional rendering<=!!!!!!!!*/}
      {count !== 0 || step !== 1 ? (
        <button
          className="reset-button"
          onClick={() => {
            setCount(0);
            setStep(1);
          }}
        >
          Reset
        </button>
      ) : null}
    </>
  );
} // the data is refershed after the complete re-render so if you watch you might notice that data is not updated
//in console for example but in the ui it updated!<=!!!!!!!!!!!!!!!!!!!!
//so make sure to connect what changes together instead of not doing it forward
// just put the data and let it to update it manaully, think of it , i think<=!!!!!
// if you can use your current useSate. without adding more, use them<=!!!!!!!!!!!!!!!!!!!!!!
// use Number() instead of parseInt(num | 0) number will return 0 automatically<=!!!!!!!!

//to import the css file it can be imported in the another index.js file
//Name of the component is the same name of the file, this is pattern

import { useState } from "react";

//
//
//
//
//
//Handing events with react
//better not to call function after onClick, make it ()=> to just take it's reference also can without putting ()
//because it will work immediately when websites rendering if it with()
// you can't pass the function here with () because this means run it when the app
// first time rendering
// so better like it without() as it doesn't take parameters <=!!!
// in this way you passing the function reference<=!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// if it take parameters put it like this {()=> HandlePrevious(p1)}
// because the ()=> (arrow functions) or function() {} refers to the refernce for the anonymous function
// aslo remember to use arrow function you put it before value <=!!!!!!!!!!!!!!!!!
// so i guess it is a jsx rules

//
//
//
//
//
//Creating a State Variable With useState
//useState function returns an array, and it take the initial value
//take two functions frist for the frist value and second to change it <=!!!!!!!
//useState or use... called HOOK in react
//Hooks can only be called at the top of the function(component), not in if statement or innner function
// setStep re-render the component with a updated one deleting the old one <=!!!!!!!!!!!!!
// React notes a change in useState and reacts automatically and re-render the component with the new useState
// also step is const how it is changes <=!!!!!!!!

//
//
//
//
//
//Don't set State Manually
//let [step, setStep ] = userState(1)
// step = step +1 won't work<=!!!!!!! and bad practice<=!!!!!!!!!
// react doesn't know if it is updating the state or not

//
//
//
//
//
//Adding Another Piece of State
//something change, then use state

//
//
//
//
//
//React Developer Tools
//https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
//Install extension from usual chrome store
//Important tool <=!!!!!!!!!!!!!!!!!!!!!!!!
//For large scale application this tool can't be used for this

//
//
//
//
//
//Updating State Based on Current value of the State
//this is like !isOpen example
//   setStep(step + 1);
//   setStep(step + 1);//this won't work it will add only 1, because it's value(step) won't change in the same render
// setStep((step) => step + 1);
// setStep((step) => step + 1); //this will work, and
//better in case of updating value depending on the current state<=!!!!


//
//
//every component has it's one states and chnaging in a component won't change what in another component
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  //   const step = 1;
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function HandlePrevious() {
    // if (step > 1) setStep(step - 1);
    if (step > 1) setStep((step) => step - 1);
  }
  function HandleNext() {
    if (step < 3) {
      //   setStep(step + 1);
      //   setStep(step + 1);//this won't work it will add only 1
      setStep((step) => step + 1);
      //   setStep((step) => step + 1); //this will work, and better in case of updating on current state
    }
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        {/* note switching between cases won't change the current value, state don't forget the value */}
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "white" }}
              onClick={HandlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "white" }}
              onClick={HandleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

import { useState } from "react";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

//
//
//
//
//My solution
// export default function App() {
//   return (
//     <div className="app">
//       <FlashCards />
//     </div>
//   );
// }

// function FlashCards() {
//   return (
//     <div className="flashcards">
//       {questions.map((q) => (
//         <FlashCard question={q.question} answer={q.answer} />
//       ))}
//     </div>
//   );
// }

// //onClick and so on called event handlers usually, or Synthetic Events in React
// function FlashCard({ question, answer }) {
//   const [sentence, setSentence] = useState(question);

//   function HandleClick() {
//     if (sentence === question) setSentence(answer);
//     else setSentence(question);
//   }
//   function HandleBlur(e) {
//     console.log(e.relatedTarget);
//     if (e.relatedTarget?.className?.includes("flashcard")) {
//       HandleClick();
//     } else {
//       //because it when clcking on empty space, it loses focus and won't work
//       e.target.focus();
//     }
//   }

//   return (
//     <button
//       className="flashcard"
//       onClick={HandleClick}
//       onBlur={HandleBlur}
//       style={{
//         backgroundColor: sentence === question ? "#eee" : "red",
//         color: sentence === question ? "black" : "white",
//       }}
//     >
//       {sentence}
//     </button>
//   );
// }

export default function App() {
  return (
    <div className="app">
      <FlashCards />
    </div>
  );
}

function FlashCards() {
  const [selectedID, setSelectedID] = useState(null);

  return (
    <div className="flashcards">
      {questions.map((q) => (
        <div
          className="flashcard"
          onClick={() => setSelectedID(q.id)}
          style={{
            backgroundColor: q.id === selectedID ? "red" : "#eee",
            color: q.id === selectedID ? "white" : "black",
          }}
          key={q.id}
        >
          {selectedID === q.id ? q.answer : q.question}
        </div>
      ))}
    </div>
  );
}

//
//
//
//
//
//If a component has relationship with each other, but the state in the parent component
//  will render all child component, no problem<=!!!!!!!!!!!!!!!!!!!
//avoid Dom, foucs on state<=!!!!!!!!!!!!!!!!!!!!

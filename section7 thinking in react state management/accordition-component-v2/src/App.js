import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div className="App">
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((q, index) => (
        <AccordionItem
          num={index + 1}
          title={q.title}
          key={index}
          curOpen={curOpen}
          onOpen={setCurOpen}
        >
          {q.text}
        </AccordionItem>
      ))}
      <AccordionItem
        num="23"
        title="Thinking in React"
        key={22}
        curOpen={curOpen}
        onOpen={setCurOpen}
      >
        Lorem, just test
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ num, title, children, curOpen, onOpen }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    if (num === curOpen) onOpen(null);
    else onOpen(num);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num}` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}

//notes
//function AccordionItem({ num, title, text }), note the order of props won't make a difference
//data.map((q, index), note map include index <=!!!!!!!
//if there a change in the ui, this means that this is a piece of state
//better to add context box using children props<=!!!!!!!!!!

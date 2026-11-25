import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];
//Controlled Elements
//changes control elements from DOM to react
//to Controll element
//1: create a peace of state
//2: put the use state in value in input
//3: connect setFunction with onChange and event.target
//by this react control elements every well

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

// win + . for emojis
function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}

//form is important in react to interact with and learn it<=!!!!!!!!!
function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function HandleSumbit(event) {
    event.preventDefault(); //important to know<=!!!!!!!!
    //react hepls the single page application, creating a page that doesn't refersh too much
    // console.log(event);

    if (!description) return;

    const newItem = {
      id: initialItems.length,
      quantity: quantity,
      packed: false,
    };

    setDescription("");
    setQuantity(1);
  }

  return (
    // <form className="add-form" onSubmit={ (e) =>HandleSumbit(e)}>

    <form className="add-form" onSubmit={HandleSumbit}>
      <h3>what do you need for you 😀 trip?</h3>
      <select onChange={(e) => setQuantity(e.target.value)} value={quantity}>
        {Array.from({ length: 20 }, (currentElement, index) => (
          <option value={index + 1} key={index + "option"}>
            {index + 1}
          </option>
        ))}
        {/* important to know this Array.from<=!!!!!!!! */}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      {/* this is better than starting with checking item.packed &&
          put the style first  */}
      <span style={{ textDecoration: item.packed ? "line-through" : "" }}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em> 💼 You have x items in your list, and you already packed x </em>
    </footer>
  );
}

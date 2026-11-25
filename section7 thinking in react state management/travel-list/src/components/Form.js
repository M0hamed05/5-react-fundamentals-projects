import { useState } from "react";

export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function HandleSumbit(event) {
    event.preventDefault(); //important to know<=!!!!!!!!
    //react hepls the single page application, creating a page that doesn't refersh too much
    // console.log(event);

    if (!description) return;

    const newItem = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      packed: false,
    };
    onAddItem(newItem);

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

import { useState } from "react";
import Stats from './Stats'
import PackingList from './PackingList'
import Form from './Form'
import Logo from './Logo'
// you can change the name of the Logo or from or else
// note you didn't add .js at the end of import, it done automatically
//you need to put react hooks in each single component file
//Ideal means not perfect


// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
// ];
//Controlled Elements
//changes control elements from DOM to react
//to Controll element
//1: create a peace of state
//2: put the use state in value in input
//3: connect setFunction with onChange and event.target
//by this react control elements every well

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(newItem) {
    const isDuplicate = items.some(
      (item) => item.description === newItem.description,
    );
    if (!isDuplicate) setItems(() => [...items, newItem]);
  }
  function handleDeleteItem(itemID) {
    setItems(items.filter((item) => item.id !== itemID));
  }
  function handleToggleItem(itemID) {
    setItems(
      items.map((item) =>
        item.id === itemID ? { ...item, packed: !item.packed } : item,
      ),
    );
  }
  function handleClearList() {
    if (items.length > 0) {
      if (window.confirm("Are you sure to clear the list ?")) setItems([]);
    }
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

// win + . for emojis


//form is important in react to interact with and learn it<=!!!!!!!!!






//Notes section
//lefting up, means moving up the state to be accessible along the elements
//important for Sibling component to access the same state
//Remember to use this [...array, newElement] <=!!!!!
//    setItems(() => [...items, newItem]); remember set takes an element, so focus on return an element
//
//
//
//
//find function pattern on array is find(item=>item === new item)<=!!!
//some returns true so it is better than find in some cases<=!!!
//some works with === not !==
// look for optmized code, like you can't use map and use object.whatYouWant instead
//
// console.log(
//   // items
//   //   .map((item) => item.description)
//   //   .some((description) => description === newItem.description),
// );
//items.some((item) => item.description === newItem.description),better<!!!
//
//
//
//
//when you add value to element, you make it by this a controlled element
//        if (item.id === itemID) item.packed = !item.packed;
//        return item;
//        you override packed by this way
//        item.id === itemID ? { ...item, packed: !item.packed } : item,//better<=!!!!!
//note for names, make the functions the in app start with small letter(camal case) as they are not component
//and make they no the same pattern, the child take it with on, and top with handle<=!!!!!!!!!
//
//
//
//It is not good to take the length of item in a sperate useState, and might call multiple re-renders
//instead, you can create a derived state, which is simply by const length = items.length
//means if the parent state changes, it will simply re-render the component which leads to update the derived state
//calclaute the nums in stats, not in main app because i guess this is not the role of app
// const itemsPackedCount = items.reduce((acc, current) => {
//   return acc + current.packed;
// }, 0);
//  const itemsPackedCount = items.filter((item) => item.packed).length;better because you want some category
//of the elements, so this could be better than reduce<=!!!!!!!!!!!!
//
//
//
//
//        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
//important in sorting a state
//note you can't a value of a array as it is with sort function because ot changes in the original array
//take it with slice to take copy of array<=!!!!!!!!!!!!
//      .sort((a, b) => a.description.localeCompare(b.description)); to sort a text<=!!!!!!!!!!!!

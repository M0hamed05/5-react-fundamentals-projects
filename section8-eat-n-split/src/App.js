import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [toggleAddFriend, setAddFriend] = useState(false);
  const [curFriend, setCurFriend] = useState(null);
  const [friendsList, setFriendsList] = useState([...initialFriends]);

  function handleSelectFriend(friend) {
    if (friend?.id === curFriend?.id) setCurFriend(null);
    else {
      setCurFriend(friend);
      setAddFriend(false);
    }
  }

  function handleAddFriend(newFriend) {
    setFriendsList([...friendsList, newFriend]);
    setAddFriend(false);
  }

  function handleSplitBill(newBalance) {
    setFriendsList(
      friendsList.map((friend) => {
        if (friend.id === curFriend.id) friend.balance = newBalance;
        return friend;
      }),
    );
    setCurFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friendsList={friendsList}
          curFriend={curFriend}
          onSelectFriend={handleSelectFriend}
        />
        {toggleAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <button
          className="button"
          onClick={() => setAddFriend(!toggleAddFriend)}
        >
          {toggleAddFriend ? "Close" : "Add friend"}
        </button>
      </div>
      {curFriend && (
        <FormSplitBill
          friend={curFriend}
          onSplitBill={handleSplitBill}
          key={curFriend.id}
        />
      )}
    </div>
  );
}

function FriendsList({ friendsList, onSelectFriend, curFriend }) {
  const friends = [...friendsList];

  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelectFriend={onSelectFriend}
          selectedFriend={curFriend}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, onSelectFriend, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend?.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 ? (
        <p style={{ color: "red" }}>
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      ) : friend.balance > 0 ? (
        <p style={{ color: "green" }}>
          {friend.name} owes you {Math.abs(friend.balance)}$
        </p>
      ) : (
        <p>You and {friend.name} are even</p>
      )}
      <button className="button" onClick={() => onSelectFriend(friend)}>
        {isSelected ? "Close" : "Select"}
      </button>
    </li>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [friendName, setFriendName] = useState("");
  const [imgUrl, setImgUrl] = useState("https://i.pravatar.cc/48?u=");

  function handleAddFriend(e) {
    e.preventDefault();
    if (!friendName || !imgUrl) return;
    onAddFriend({
      id: crypto.randomUUID(),
      name: friendName,
      image: imgUrl,
      balance: 0,
    });

    setFriendName("");
    setImgUrl("https://i.pravatar.cc/48?u=");
  }

  return (
    <form className="form-add-friend">
      <label>👬Friend name</label>
      <input
        type="text"
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
      />
      <label>📷image url</label>
      <input
        type="text"
        value={imgUrl}
        onChange={(e) => setImgUrl(e.target.value)}
      />
      <button className="button" onClick={(e) => handleAddFriend(e)}>
        Add
      </button>
    </form>
  );
}

function FormSplitBill({ friend, onSplitBill }) {
  const [billValue, setBillValue] = useState("");
  const [expense, setExpense] = useState("");
  const friendExpense = billValue ? billValue - expense : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  if (!friend) return;

  function handleSubmit(e) {
    e.preventDefault();

    if (!billValue || !expense) {
      if (!(billValue === 0 || expense === 0)) return;
    }

    onSplitBill(calculateBalance());
  }

  function calculateBalance() {
    let balance = 0;
    balance =
      whoIsPaying === "user" ? billValue - expense : (balance = -expense);
    return balance + friend.balance;
  }

  return (
    <form className="form-split-bill">
      <h2>split bill with {friend.name}</h2>
      <label>💰Bill value</label>
      <input
        type="number"
        value={billValue}
        onChange={(e) => setBillValue(Number(e.target.value))}
      />

      <label>🕴Your expense</label>
      <input
        type="number"
        value={expense}
        onChange={(e) =>
          setExpense(
            Number(e.target.value) > billValue
              ? billValue
              : Number(e.target.value),
          )
        }
      />

      <label>👬{friend.name}'s exp ense</label>
      <input type="text" disabled value={friendExpense} />
      <label>🤑Who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value={friend.name}>{friend.name}</option>
      </select>

      <button className="button" onClick={(e) => handleSubmit(e)}>
        Split bill
      </button>
    </form>
  );
}

//Notes
//If more than one state to compare, but them inside a function, becuase jsx can't have statements
//you can use conditional rendering, no difference in performance
//
//
//
//to apply Single responsibility, let the app take care of controling the data<=!!!!
//mean closing and opening the form
//crypto.randomUUID(), note that it might not work on old browsers
//Don't mutate original arrays, use slice for example
//some solution can be done without lifting up state
//curFriend should be named with selected
//note you can replace the extra state, which is checks false or true
//main data can be falsy value or truthy value
//
//compare id instead of objects and offer states<=!!!!!
//
//make code more readable, so you can save states in variables instead of using them directly
// use ? to check, if it is null or not before continuing<=!!!!
//Optional chaining
//
//Wrong
/*
function FormSplitBill({ friend }) {
  if (!friend) return;

  const [billValue, setBillValue] = useState("");
*/
// use state should be at the top, before return
// hooks always at the top level<=!!!
// because problems in hooks order in memory and rendering a i guess
//
//note best way to use html tags to max number, check it in set in state
//
//don't use slice, if not needed

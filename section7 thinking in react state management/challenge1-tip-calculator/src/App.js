import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tips, setTips] = useState(0);
  const [friendsTips, setFriendsTips] = useState(0);

  const totalTips = (
    ((bill * tips) / 100 + (bill * friendsTips) / 100) /
    2
  ).toFixed(2);

  function handleChangeBill(newBill) {
    setBill(newBill);
  }

  function handleChangeTips(newTips) {
    setTips(newTips);
  }
  function handleChangeFriendTips(newFriendTips) {
    setFriendsTips(newFriendTips);
  }
  function handleReset() {
    setBill("");
    setTips(0);
    setFriendsTips(0);
  }
  return (
    <>
      <InputBill bill={bill} onChangeBill={handleChangeBill} />
      <ServiceReview tips={tips} onChangeTips={handleChangeTips}>
        How did you like the service?
      </ServiceReview>
      <ServiceReview tips={friendsTips} onChangeTips={handleChangeFriendTips}>
        How did your friend like the service?
      </ServiceReview>
      {Boolean(bill) && <Payout bill={bill} totalTips={totalTips} />}

      {(bill || tips !== 0 || friendsTips !== 0) && (
        <button onClick={handleReset}>Reset</button>
      )}
    </>
  );
}

function InputBill({ bill, onChangeBill }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="number"
        placeholder="bill..."
        value={bill}
        onChange={(e) => onChangeBill(e.target.value)}
      />
    </div>
  );
}

function ServiceReview({ children, tips, onChangeTips }) {
  return (
    <div>
      <span>{children}</span>
      <select value={tips} onChange={(e) => onChangeTips(e.target.value)}>
        <option value={0}>Dissatified (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Payout({ bill, totalTips }) {
  console.log(totalTips);
  return (
    <h3>
      You Pay ${(Number(bill) + Number(totalTips)).toFixed(2)} (${bill} + $
      {totalTips} tip)
    </h3>
  );
}

//Notes
//don't put all the logic in app, let it just call them
//use children prop for more flexability<=!!!
//you can use '' in number type input instead of 0<=!!!
//use label instead of span next to the input text<=!!!
//you create the static part first

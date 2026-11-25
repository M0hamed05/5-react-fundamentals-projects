import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//this js folder should be named with index.js
// because webpack expects the entry point to be called index.js

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

//it must not be called App is just a convention
// 1 & 2 import and add your component that is a function
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
//note: it returns only element not two in one, or put them inside dev
// and don't nest component (decalre fucntion inside function)
// and put them inside ()

// 3 get the root from index.html and put inside it you component by render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
//React.StrictMode render the code twice in developement to check if there errors

//
//
//
//
//debugging
// Ctrl + c to stop running
// keep console in chrom running
// Use ESLint for best code

//
//
//
//
//
// //Creating and Reusing Components
// //function frist letter should be capatil and return a marker as jsx
// //and can be called many times in another component
// //to disable github default
// //SCM: Diff Decorations
// // set it to none from settings
// function Pizza() {
//   return (
//     <div>
//       <img src="pizzas/spinaci.jpg" width={200} alt="spinaci" />
//       <h3>Pizza</h3>
//       <p>ingredients</p>
//     </div>
//   );
// }

//
//
//
//Styling React component, don't forget to import style.css
//note className not class, because class is a reserved keyword in js
//Js logic in components, can write as many js you want in the element
//Creating More components
function Header() {
  //   const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};

  return (
    // <h1 style={{ color: "red", fontSize: "48px", textTransform: "uppercase" }}>
    // note - in css converted here to camal case
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

// function Footer() {
//   //the old way without jsx
//   //   return React.createElement("footer", null, "We're currently open");
//   //   but also jsx is converted to React.createElement

//   const hour = new Date().getHours();
//   const openHour = 12;
//   const closeHour = 22;
//   const isOpen = hour >= openHour && hour <= closeHour;
//   return (
//     <footer className="footer">
//       <Order isOpen={isOpen} />
//     </footer>
//   );
// }
// function Order(props) {
//   return (
//     <div className="order">
//       <p>
//         {new Date().toLocaleTimeString()}. We're currently{" "}
//         {props.isOpen ? "Open" : "Closed"}
//       </p>
//       <button
//         className="btn"
//         style={{ display: props.isOpen ? "block" : "none" }}
//       >
//         Order
//       </button>
//     </div>
//   );
// }

//
//
//
//
//Passing and Recieving Props
//Props means how we send data betweeen components
//Specially from parent to child component
//note: to pass anything not a string (array,...), put it inside a {}
// function Menu() {
//   return (
//     <main className="menu">
//       <h2>Our Menu</h2>
//       <Pizza
//         name="Pizza Spinaci"
//         ingredient="tomato,..."
//         photoName="pizzas/spinaci.jpg"
//         price={10}
//       />
//       <Pizza
//         name="Pizza Funghi"
//         ingredient="mushrooms,..."
//         photoName="pizzas/funghi.jpg"
//         // price="12"
//         price={12}
//       />
//     </main>
//   );
// }
//Props is an object with data
//contains attributes what in the top
//and remember the attributes names, because it is like usual json
//put it inside {}
// function Pizza(props) {
//   console.log(props);
//   return (
//     <div className="pizza">
//       <img src={props.photoName} width={200} alt={props.photoName} />
//       <div>
//         <h3>{props.name}</h3>
//         <p>{props.ingredient}</p>
//         <span>{props.price + 10}</span>
//       </div>
//     </div>
//   );
// }

//
//
//
//
//Rendering Lists
//it is usual map(high order functions)
//becuase statements(if/else, for, switch) are not allowed
//should send it as object here
//and should pass something unique like key
//note: should rename the tag with the matching rule like div here to convert to ul
function Menu() {
  const pizzas = pizzaData;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {/* <ul className="pizzas">
        {pizzas.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul> */}

      {pizzas.length > 0 && (
        // <React.Fragment key="s">
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      )}
      {/*better way to render it using short circuting
        and here because pizzas.length is for the empty arrays because they are not falsy values
        and we don't wnant it to render
        but note it won't render true or false, but it will render 0 if there
        always take care of it being true or false <=!!!!!!*/}
    </main>
  );
}
// function Pizza(props) {
//   console.log(props);
//   return (
//     <li className="pizza">
//       <img
//         src={props.pizzaObj.photoName}
//         width={200}
//         alt={props.pizzaObj.photoName}
//       />
//       <div>
//         <h3>{props.pizzaObj.name}</h3>
//         <p>{props.pizzaObj.ingredients}</p>
//         <span>{props.pizzaObj.price}</span>
//       </div>
//     </li>
//   );
//}

//
//
//
//
//Conditional Rendering with &&
//i guess instead of { true? "true": "false"}
// you can make it {true && "true"}, will be helpful if you don't want something appear if false case
// this called short circuiting
// optional chaining ??

//
//
//
//
//
//Conditional Rendering With Ternaries
// instead of continonal rendering, you can use ternaires or short hand if
// very helpful in case you want to render a message if false case
// and JSX doesn't contain statements because of the statements doesn't return values
// bceause it won't work when converting to React.createElement <=!!!!!!!!!

//
//
//
//
//
//Conditional Rendering With Multiple Returns
// use return with if statement, so you can use as much as needed
function Pizza(props) {
  console.log(props);

  // if (props.pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img
        src={props.pizzaObj.photoName}
        width={200}
        alt={props.pizzaObj.photoName}
      />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        {/* {props.pizzaObj.soldOut ? (
          <span>Sold Out</span>
        ) : (
          <span>{props.pizzaObj.price}</span>
        )} not the best way, what's after it is better*/}
        <span>
          {props.pizzaObj.soldOut ? "Sold Out" : props.pizzaObj.price}
        </span>
      </div>
    </li>
  );
}
//you should notice which of these ways are the best to choice in your case

//
//
//
//
//
// Extracting JSX Into a New Component
// means take a part of code and put it in a new component as we did in footer and order

//
//
//
//
//
//Destructing Props
//side note: Props can be empty if no data is there
//props can send it as object or attributes in that object
//because props is a usual object send what inside it
//but props can't be used in this case
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      <Order isOpen={isOpen} openHour={openHour} closeHour={closeHour} />
    </footer>
  );
}
function Order({ isOpen, openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        We are open from {openHour} to {closeHour}. Current time:
        {new Date().toLocaleTimeString()}. We're currently{" "}
        {isOpen ? "Open" : "Closed"}
      </p>
      <button className="btn" style={{ display: isOpen ? "block" : "none" }}>
        Order
      </button>
    </div>
  );
}

//
//
//
//
//
//React Fragments
// instead of putting div you might not need, put a <></> instead
// important: allows to have more than one element in jsx without adding dive keyword<=!!!!!!!!!!!!

//
//
//
//
//
//Setting Classes and Text Conditionally
// changing and adding class name depending on the props value

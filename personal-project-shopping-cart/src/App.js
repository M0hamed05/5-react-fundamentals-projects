import { useState } from "react";
import Home from "./Home/home";
import Shop from "./Shop/shop";
import Cart from "./Cart/cart";

export default function App() {
  const [curPage, setCurPage] = useState(
    () => localStorage.getItem("curPage") ?? "home",
  );

  function handleSetCurPageChange(newPage) {
    setCurPage(newPage);
    localStorage.setItem("curPage", newPage);
  }

  const [cartCount, setCartState] = useState(
    JSON.parse(localStorage.getItem("cartProducts") ?? "[]").length,
  );
  function handleChangeCurrentState(newCount) {
    setCartState(newCount);
  }

  return (
    <div className="app">
      <h3>Shopping Cart</h3>
      <header>
        <ul>
          <li
            className={curPage === "home" ? "active" : ""}
            onClick={() => handleSetCurPageChange("home")}
          >
            Home
          </li>
          <li
            className={curPage === "shop" ? "active" : ""}
            onClick={() => handleSetCurPageChange("shop")}
          >
            Shop
          </li>
          <li
            className={curPage === "cart" ? "active" : ""}
            onClick={() => handleSetCurPageChange("cart")}
          >
            Cart {cartCount || ""}
          </li>
        </ul>
      </header>
      <main>
        {curPage === "home" && (
          <Home onCurrentPageChanged={handleSetCurPageChange} />
        )}
        {curPage === "shop" && <Shop onChangeCartCount={handleChangeCurrentState} />}
        {curPage === "cart" && <Cart onChangeCartCount={handleChangeCurrentState} />}
      </main>
      <footer>This is to practice React fundamentals without tutorials.</footer>
    </div>
  );
}

//notes
//to install bootstrap
//Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
//do this in powershell as administrator (in case face a problem)
//npm install bootstrap

//font-size in * changes the size of all elements, even if they didn't contain a text
//in another place no problem

//vh (view height), don't forget
//100vh means 100% from the all height of the screen itself

//in localStorage setItem is better than direct initialize and safer

//JSON.parse accepts only array not empty string

//filter and map returns a new array

//let newCartProducts = cartProducts;
//this is wrong becuase this take the reference and changes the orginal value
//so better take it by spread operator ...

//  object-fit: contain; for images not stretch

//flex is better than usual way

// function HandleSearch(searchWord) {
//   setProducts(
//     getAllProducts().filter((product) =>
//       product.title
//         .toLocaleLowerCase()
//         .includes(searchWord.trim().toLocaleLowerCase()),
//     ),
//   );
//   //handleSortBy(sortType);
// }
//This can't be hear because the component didn't finish rendering
//so the upcoming component should take the products as an array not from the STATE<=!!!!!!!!!!!!
//be careful of chaning the original array

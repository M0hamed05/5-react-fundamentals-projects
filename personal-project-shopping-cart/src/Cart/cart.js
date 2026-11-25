import { useState } from "react";
import ProductCard from "../ProductCard/productCard";

export default function Cart({ onChangeCartCount }) {
  const [sortType, setSortType] = useState("none");

  const [cartProducts, setCartProdcuts] = useState(
    JSON.parse(localStorage.getItem("cartProducts") ?? "[]"),
  );

  function handleremoveProductFromCart(productID) {
    const savedCart = JSON.parse(localStorage.getItem("cartProducts") ?? "[]");
    const newCartProducts = savedCart.filter(
      (product) => product.id !== productID,
    );
    setCartProdcuts(newCartProducts);
    localStorage.setItem("cartProducts", JSON.stringify(newCartProducts));
    onChangeCartCount(newCartProducts.length);
  }

  function handleSearchWithSort(searchWord) {
    const filteredProducts = HandleSearch(searchWord);
    handleSortBy(sortType, filteredProducts, searchWord);
  }

  function HandleSearch(searchWord) {
    return JSON.parse(localStorage.getItem("cartProducts") ?? "[]").filter(
      (product) =>
        product.title
          .toLocaleLowerCase()
          .includes((searchWord ?? "").trim().toLocaleLowerCase()),
    );
  }

  function handleSortBy(sortType, products, searchWord) {
    setSortType(sortType);
    if (sortType === "none") {
      setCartProdcuts(
        JSON.parse(localStorage.getItem("cartProducts") ?? "[]").filter(
          (product) =>
            product.title
              .toLocaleLowerCase()
              .includes((searchWord ?? "").trim().toLocaleLowerCase()),
        ),
      );
    } else if (sortType === "rate")
      setCartProdcuts(products.sort((a, b) => b.rating.rate - a.rating.rate));
    else if (sortType === "price")
      setCartProdcuts(products.sort((a, b) => b.price - a.price));
  }

  return (
    <>
      <div className="product-header">
        <span>Search: </span>
        <input
          type="text"
          placeholder="Search a product"
          className="search input"
          onChange={(e) => handleSearchWithSort(e.target.value)}
        />
        <span>Sort by: </span>
        <select onChange={(e) => handleSortBy(e.target.value, cartProducts)}>
          <option value="none">none</option>
          <option value="rate">rate</option>
          <option value="price">price</option>
        </select>
      </div>
      <div className="products">
        {cartProducts.map((product) => (
          <ProductCard
            productData={product}
            key={product.id}
            onRemoveProductFromCart={handleremoveProductFromCart}
            inCart={true}
          />
        ))}
      </div>
    </>
  );
}

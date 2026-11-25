import { useState } from "react";
import ProductCard from "../ProductCard/productCard.js";
import getAllProducts from "./productsData.js";
import "./shop.css";

export default function Shop({ onChangeCartCount }) {
  const [Products, setProducts] = useState(getAllProducts());
  const [sortType, setSortType] = useState("none");

  const [cartProducts, setCartProdcuts] = useState(
    JSON.parse(localStorage.getItem("cartProducts") ?? "[]"),
  );

  function handleAddProductToCart(product) {
    setCartProdcuts([...cartProducts, product]);
    localStorage.setItem(
      "cartProducts",
      JSON.stringify([...cartProducts, product]),
    );
    onChangeCartCount([...cartProducts, product].length);
  }

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
    return getAllProducts().filter((product) =>
      product.title
        .toLocaleLowerCase()
        .includes((searchWord ?? "").trim().toLocaleLowerCase()),
    );
  }

  function handleSortBy(sortType, products, searchWord) {
    setSortType(sortType);
    if (sortType === "none") {
      setProducts(
        getAllProducts().filter((product) =>
          product.title
            .toLocaleLowerCase()
            .includes((searchWord ?? "").trim().toLocaleLowerCase()),
        ),
      );
    } else if (sortType === "rate")
      setProducts(products.sort((a, b) => b.rating.rate - a.rating.rate));
    else if (sortType === "price")
      setProducts(products.sort((a, b) => b.price - a.price));
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
        <select onChange={(e) => handleSortBy(e.target.value, Products)}>
          <option value="none">none</option>
          <option value="rate">rate</option>
          <option value="price">price</option>
        </select>
      </div>
      <div className="products">
        {Products.map((product) => (
          <ProductCard
            productData={product}
            key={product.id}
            onAddProductToCart={handleAddProductToCart}
            onRemoveProductFromCart={handleremoveProductFromCart}
            inCart={cartProducts.some((p) => p.id === product.id)}
          />
        ))}
      </div>
    </>
  );
}

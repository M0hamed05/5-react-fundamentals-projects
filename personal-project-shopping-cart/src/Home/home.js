import "./home.css";
export default function Home({ onCurrentPageChanged }) {
  return (
    <div className="home">
      <h1>welcome to our shopping cart</h1>
      <h2>browse latest products</h2>
      <button onClick={() => onCurrentPageChanged("shop")}>
        Go to products
      </button>
    </div>
  );
}

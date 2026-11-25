import "./productCard.css";
export default function ProductCard({
  productData,
  onAddProductToCart,
  onRemoveProductFromCart,
  inCart,
}) {
  return (
    <div className="product-card">
      <img src={productData.image} alt={productData.title} />
      <p className="title">{productData.title}</p>
      <p className="category">{productData.category}</p>
      <p className="price">
        Price: <b>{productData.price}</b>
      </p>
      <p className="rating">Rating: {productData.rating.rate}</p>
      <button
        onClick={() =>
          inCart
            ? onRemoveProductFromCart(productData.id)
            : onAddProductToCart(productData)
        }
      >
        {inCart ? "Remove From Cart" : "Add To Cart"}
      </button>
    </div>
  );
}

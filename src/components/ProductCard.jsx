export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <button className="add-to-cart-btn" onClick={() => addToCart(product.id)}>
        Add to cart
      </button>
    </div>
  );
}

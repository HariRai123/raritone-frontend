import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const handleAddToCart = () => {
    alert(`${product.name} added to cart!`);
  };

  return (
    <article className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>

      <div className="product-info">
        <p className="product-category">{product.category}</p>

        <h3 className="product-title">{product.name}</h3>

        <p className="product-brand">{product.brand}</p>

        <div className="product-price">₹{product.price}</div>

        <div className="product-actions">
          <Link to={`/products/${product._id}`} className="view-button">
            View Product
          </Link>

          <button
            type="button"
            className="add-cart-button"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;

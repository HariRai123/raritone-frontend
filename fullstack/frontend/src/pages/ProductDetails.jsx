import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getProductById } from "../api/productApi";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getProductById(id);

        setProduct(data);
      } catch (err) {
        console.error("Error fetching product:", err);

        setError("Unable to load product.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="status">Loading product...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!product) {
    return <div className="error">Product not found.</div>;
  }

  return (
    <section className="product-details">
      <Link to="/products" className="back-link">
        ← Back to Products
      </Link>

      <div className="details-container">
        <div className="details-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="details-content">
          <p className="product-category">{product.category}</p>

          <h1>{product.name}</h1>

          <p className="product-brand">Brand: {product.brand}</p>

          <p className="details-price">₹{Number(product.price).toFixed(2)}</p>

          <p className="details-description">{product.description}</p>

          <p className="product-stock">
            {product.stock > 0
              ? `${product.stock} items available`
              : "Out of stock"}
          </p>

          <div className="details-actions">
            <button className="add-cart-button" disabled={product.stock <= 0}>
              Add to Cart
            </button>

            <button className="buy-button" disabled={product.stock <= 0}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;

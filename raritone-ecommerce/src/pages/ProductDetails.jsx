import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getProductById } from "../services/api";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);

        const data = await getProductById(id);

        setProduct(data);
      } catch (err) {
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

  return (
    <section className="product-details">
      <Link to="/products" className="back-link">
        ← Back to Products
      </Link>

      <div className="details-container">
        <div className="details-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="details-content">
          <p className="product-category">{product.category}</p>

          <h1>{product.title}</h1>

          <div className="rating">
            Rating {product.rating?.rate || "4.5"}
            <span>({product.rating?.count || 0} reviews)</span>
          </div>

          <p className="details-price">${product.price.toFixed(2)}</p>

          <p className="details-description">{product.description}</p>

          <div className="details-actions">
            <button className="add-cart-button">Add to Cart</button>

            <button className="buy-button">Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;

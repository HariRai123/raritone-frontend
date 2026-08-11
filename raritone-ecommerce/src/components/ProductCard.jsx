import { Link } from "react-router-dom"

function ProductCard({product}) {
  return (
   <article className="product-card">
    <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image"/>
    </div>
    <div className="product-info">
        <p className="product-category">
            {product.category}
        </p>
        <h3 className="product-title">
            {product.title}
        </h3>
        <div className="product-bottom">
            <span className="product-price">
                ${product.price.toFixed(2)}
            </span>
            <Link to={`/products/${product.id}`} className="view-button">View</Link>
        </div>
    </div>
   </article>
  )
}

export default ProductCard

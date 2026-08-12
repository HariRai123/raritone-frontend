import ProductCard from "./ProductCard";

function ProductGrid({ products }) {
  if (products.length === 0) {
    return (
      <div className="no-products">
        <h3>No Products Found</h3>
        <p>Try another search or category.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;

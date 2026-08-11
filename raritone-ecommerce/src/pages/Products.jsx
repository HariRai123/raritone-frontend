import { useEffect, useState } from "react";

import { getProducts } from "../services/api";
import ProductGrid from "../components/ProductGrid";

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const data = await getProducts();

        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        setError("Unable to load products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let result = [...products];

    if (search.trim()) {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (category !== "all") {
      result = result.filter((product) => product.category === category);
    }

    setFilteredProducts(result);
  }, [search, category, products]);

  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <section className="products-page">
      <div className="products-header">
        <div>
          <p className="section-label">OUR COLLECTION</p>

          <h1>All Products</h1>
        </div>

        <p>{filteredProducts.length} products</p>
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="category-select"
        >
          {categories.map((item) => (
            <option value={item} key={item}>
              {item === "all" ? "All Categories" : item}
            </option>
          ))}
        </select>
      </div>

      {loading && <div className="status">Loading products...</div>}

      {error && <div className="error">{error}</div>}

      {!loading && !error && (
        <div className="products-scroll-container">
          <ProductGrid products={filteredProducts} />
        </div>
      )}
    </section>
  );
}

export default Products;

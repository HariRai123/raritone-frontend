import ProductCard from "./ProductCard";
function ProductGrid({products}) {
 if(!products.length)
 {
    return (
    <div className="no-products">
        <h3>No Products found</h3>
        <p>Try another search or category</p>
    </div>
  )
}
return(
    <div className="product-grid">
        {products.map((product)=>(
            <ProductCard 
            key={product.id}
            product={product}
            />
        ))}
    </div>
)
}

export default ProductGrid

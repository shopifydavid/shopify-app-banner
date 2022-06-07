import React from 'react'

function ProductItem({product}) {
    console.log(product, "product");
  return (
    <div>
        <img src={product.images[0].originalSrc} alt={product.title} height="100px" width="100px" />
        <h2>{product.title}</h2>
    </div>
  )
}

export default ProductItem
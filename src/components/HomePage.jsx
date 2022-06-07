import { ResourcePicker } from "@shopify/app-bridge-react";
import { Page } from "@shopify/polaris";
import React, { useState } from 'react'
import ProductList from "./ProductList";

export function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);

  function handleProductSelection(payload) {
    setIsOpen(false);
    console.log(payload.selection, "payload.selection");
    setProducts(payload.selection);
  }
  
  return (
    <Page
      title="Product Selector"
      primaryAction={{
        content: "Select product",
        onAction: () => setIsOpen(true),
      }}
    >
      <ResourcePicker 
        resourceType="Product"
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        onSelection={handleProductSelection}  
      />
      <ProductList products={products}/>
    </Page>
  );
}

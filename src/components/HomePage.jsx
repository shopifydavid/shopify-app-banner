import { ResourcePicker } from "@shopify/app-bridge-react";
import { Page } from "@shopify/polaris";
import React, { useState } from 'react'

export function HomePage() {
  const [isOpen, setIsOpen] = useState(false)
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
        onSelection={(payload) => {
          setIsOpen(false);
          // Object with selected products
          console.log(payload);
        }}   
      />
    </Page>
  );
}

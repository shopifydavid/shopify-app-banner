import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
} from "@shopify/polaris";

import trophyImgUrl from "../assets/home-trophy.png";

import { ProductsCard } from "./ProductsCard";

export function HomePage() {
  return (
    <Page
    title="Product Selector"
    primaryAction={{
      content: "Select product",
      onAction: () => console.log("I have been clicked")
    }}
    >
      <Heading>My first shopify app</Heading>
    </Page>
  );
}

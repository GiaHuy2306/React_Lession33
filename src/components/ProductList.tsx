import React from "react";
import type { Product } from "../store/reducers/type";
import ProductItem from "./ProductItem";

const products: Product[] = [
    { id: 1, name: "Pizza", description: "Pizza lorem ipsum...", price: 30, image: "https://via.placeholder.com/50", stock: 10 },
    { id: 2, name: "Hamburger", description: "Hamburger lorem ipsum...", price: 15, image: "https://via.placeholder.com/50", stock: 10 },
    { id: 3, name: "Bread", description: "Bread lorem ipsum...", price: 20, image: "https://via.placeholder.com/50", stock: 10 },
    { id: 4, name: "Cake", description: "Cake lorem ipsum...", price: 10, image: "https://via.placeholder.com/50", stock: 10 },
];

const ProductList: React.FC = () => {
  return (
    <div className="w-full md:w-2/3 bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">List Products</h2>
      <div className="space-y-2">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;



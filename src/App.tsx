import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Card";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">🛒 Shopping Cart Demo</h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Danh sách sản phẩm */}
        <ProductList />

        {/* Giỏ hàng */}
        <Cart />
      </div>
    </div>
  );
};

export default App;

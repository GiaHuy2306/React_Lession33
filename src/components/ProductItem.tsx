import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/reducers/action";
import type { Product } from "../store/reducers/type";

interface Props {
  product: Product;
}

const ProductItem: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center border-b pb-2 mb-2">
      {/* Hình ảnh sản phẩm */}
      <img
        src={product.image}
        alt={product.name}
        className="w-16 h-16 rounded mr-4"
      />

      {/* Thông tin sản phẩm */}
      <div className="flex-1">
        <p className="font-semibold">{product.name}</p>
        <p className="text-gray-600 text-sm">{product.description}</p>
      </div>

      {/* Giá, input stock và nút thêm vào giỏ */}
      <div className="flex flex-col items-end">
        {/* Giá */}
        <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded font-bold mb-2">
          {product.price} USD
        </span>

        {/* Input hiển thị stock */}
        <input
          type="number"
          value={product.stock}
          readOnly
          className="w-20 text-center border rounded mb-2 text-sm"
        />

        {/* Nút thêm vào giỏ */}
        <button
          className={`${
            product.stock === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          } text-white px-3 py-1 rounded text-sm`}
          onClick={() => dispatch(addToCart(product))}
          disabled={product.stock === 0}
        >
          {product.stock === 0 ? "Out of stock" : "Add to cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductItem;

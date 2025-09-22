import { useDispatch } from "react-redux";
import type { CardItem as CartItemType } from "../store/reducers/type"
import { updateQuantity, removeFromCart } from "../store/reducers/action";

interface Props {
    item: CartItemType,
    index: number;
    onDeleteSuccess: () => void;
}

const CartItem: React.FC<Props> = ({item, index, onDeleteSuccess}) => {
    const dispatch = useDispatch();

    const handleUpdate = (quantity: number) => {
        if (quantity >= 1 && quantity <= 10) {
            dispatch(updateQuantity(item.product.id, quantity));
        }
    }

    const handleDelete = () => {
      dispatch(removeFromCart(item.product.id));
      onDeleteSuccess();
    }

    return (
        <tr className="border-b">
      <td className="p-2">{index + 1}</td>
      <td className="p-2">{item.product.name}</td>
      <td className="p-2 text-right">{item.product.price} USD</td>
      <td className="p-2 text-right">
        <input
          type="number"
          value={item.quantity}
          min={1}
          max={10}
          className="w-16 p-1 border"
          onChange={(e) => handleUpdate(Number(e.target.value))}
        />
      </td>
      <td className="p-2 text-right">
        <button
          className="bg-blue-500 text-white px-2 py-1 rounded mr-1"
          onClick={() => handleUpdate(item.quantity)}
        >
          Update
        </button>
        <button
          className="bg-red-500 text-white px-2 py-1 rounded"
          onClick={handleDelete}
        >
          Delete
        </button>
      </td>
    </tr>
    )
}

export default CartItem
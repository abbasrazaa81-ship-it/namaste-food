import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>
      <button onClick={() => dispatch(clearCart())}>
        Clear Cart
      </button>

      {cartItems.map((item, index) => (
        <p key={index}>{item.title}</p>
      ))}
    </div>
  );
};

export default Cart;
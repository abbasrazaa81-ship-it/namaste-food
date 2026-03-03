import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header">
      <Link to="/">
        <h1>🍔 Namaste Food</h1>
      </Link>

      <Link to="/cart">
        🛒 Cart ({cartItems.length})
      </Link>
    </div>
  );
};

export default Header;
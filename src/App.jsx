import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
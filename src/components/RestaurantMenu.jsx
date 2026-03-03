import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [menu, setMenu] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&restaurantId=${resId}`
    );
    const json = await data.json();

    const items =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    setMenu(items || []);
  };

  return (
    <div>
      <h2>Menu</h2>

      {menu.map((item, index) => (
        <div key={index}>
          <p>{item?.card?.card?.title}</p>
          <button
            onClick={() =>
              dispatch(addItem(item?.card?.card))
            }
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
import { useEffect, useState } from "react";
import RestaurantCard from "./Restaurantcard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/products"
      );
      const json = await response.json();

      setList(json.products);
      setFilteredList(json.products);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  if (list.length === 0) return <Shimmer />;

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <button
        onClick={() => {
          const filtered = list.filter((item) =>
            item.title
              .toLowerCase()
              .includes(searchText.toLowerCase())
          );
          setFilteredList(filtered);
        }}
      >
        Search
      </button>

      <div className="res-container">
        {filteredList.map((item) => (
          <RestaurantCard key={item.id} resData={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
const RestaurantCard = ({ resData }) => {
  return (
    <div className="card">
      <img
        src={resData.thumbnail}
        alt="food"
        width="100%"
      />
      <h3>{resData.title}</h3>
      <h4>₹ {resData.price}</h4>
      <p>⭐ {resData.rating}</p>
    </div>
  );
};

export default RestaurantCard;
import { IMG_CDN_URL } from "../config";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  lastMileTravel
}) => {
  const {user} = useContext(UserContext);
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-blue-100 hover:scale-95 rounded-lg">
      <img alt="food-card" src={IMG_CDN_URL + cloudinaryImageId} className="rounded-lg" />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravel} km</h4>
      <h4>{user.name}</h4>
      <h4>{user.email}</h4>
    </div>
  );
};

export default RestaurantCard;

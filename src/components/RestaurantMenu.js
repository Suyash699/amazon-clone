import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // const params = useParams();
  // const {id} = params; also written as:
  const restaurant = useRestaurant(resId);

  const dispatch = useDispatch();

  const addFoodItem = (item)=>{
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex bg-blue-50">
      <div>
        <h1>Restaurant id: {resId}</h1>
        <h2 className="font-bold text-2xl p-2">
          {restaurant?.cards?.[0]?.card?.card?.info?.name}
        </h2>
        <img
          src={
            IMG_CDN_URL +
            restaurant?.cards?.[0]?.card?.card?.info?.cloudinaryImageId
          }
          alt=""
          className="h-96 w-96 m-2 rounded-lg"
        />
        <h3 className="font-medium text-xl p-2">
          {restaurant?.cards?.[0]?.card?.card?.info?.areaName}
        </h3>
        <h3 className="font-medium text-xl p-2">
          {restaurant?.cards?.[0]?.card?.card?.info?.city}
        </h3>
        <h3 className="font-medium text-xl p-2">
          {restaurant?.cards?.[0]?.card?.card?.info?.avgRating} stars
        </h3>
        <h3 className="font-medium text-xl p-2">
          {restaurant?.cards?.[0]?.card?.card?.info?.costForTwoMessage}
        </h3>
      </div>
 
      <div className="p-5 ml-72">
        <h1 className="text-2xl font-bold p-2">Menu</h1>
        <ul>
          {restaurant &&
            Object.values(
              restaurant
            )?.[1]?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards?.map(
              (item) => (
                <li key={item?.card?.info?.id} className="text-lg">
                  {item?.card?.info?.name} - <button className="p-1 bg-green-50" onClick={()=> addFoodItem(item?.card?.info)}>Add</button>
                  <hr className="border-blue-200" />
                </li>
              )
            )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;

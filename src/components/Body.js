//config driven ui
import { useEffect, useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter(restaurant => {
    return restaurant.data.name.includes(searchText)}
  );

  return filterData;
}

const Body = () => {
  // const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantList);
  const [restaurants, setRestaurants] = useState([]); 
  const [searchText, setSearchText] = useState("");

  useEffect(()=>{
    getRestaurants();
}, [])

async function getRestaurants(){
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&sortBy=RELEVANCE&page_type=DESKTOP_WEB_LISTING#"
  );
  const json = await data.json();
  console.log(json);
  setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
}

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText || ""}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, restaurants);
            console.log(data);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;

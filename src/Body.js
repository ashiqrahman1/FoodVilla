import { restaurantlist } from "./Config";
import HotelCard from "./HotelCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function filterData(searchInput, restaurants) {
  const filterdata = restaurants.filter((restro) =>
    restro?.data?.name?.toLowerCase().includes(searchInput.toLowerCase())
  );
  return filterdata;
}
const Body = () => {
  const [restaurants, setRestaurant] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [allRestro, setAllrestro] = useState([]);
  useEffect(() => {
    Getdata();
  }, []);

  async function Getdata() {
    const api_data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.6345647&lng=76.1203982&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await api_data.json();
    console.log(json);
    setAllrestro(json?.data?.cards[2]?.data?.data?.cards);
    setRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  return (
    <div className="body__outline py-3">
      <div className="container">
        <div className="search-box">
          <div className="searchbar">
            <input
              type="text"
              placeholder="Search Your Food"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <div className="searchbar__icon">
              <button
                onClick={() => {
                  // need to update
                  // filter Data
                  const restaurantInfo = filterData(searchInput, allRestro);
                  setRestaurant(restaurantInfo);
                }}
              >
                <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </div>
        {restaurants.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="items py-3">
            {restaurants.map((hotel) => {
              return <HotelCard key={hotel.data.id} {...hotel.data} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;

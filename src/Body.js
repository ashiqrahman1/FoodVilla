import { restaurantlist } from "./Config";
import HotelCard from "./HotelCard";
import { useState } from "react";

function filterData(searchInput, restaurants) {
  const filterdata = restaurants.filter((restro) =>
    restro?.data?.name?.toLowerCase().includes(searchInput.toLowerCase())
  );
  return filterdata;
}
const Body = () => {
  const [restaurants, setRestaurant] = useState(restaurantlist);
  const [searchInput, setSearchInput] = useState("");
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
            {console.log(searchInput)}
            <div className="searchbar__icon">
              <button
                onClick={() => {
                  // need to update
                  // filter Data
                  const restaurantInfo = filterData(searchInput, restaurants);
                  setRestaurant(restaurantInfo);
                }}
              >
                <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="items py-3">
          {restaurants.map((hotel) => {
            return <HotelCard key={hotel.data.id} {...hotel.data} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;

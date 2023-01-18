import { useState } from "react";
const [searchInput, setSearchInput] = useState("");
const Searchbar = () => {
  return (
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
              const restaurantInfo = filterData(searchInput, restaurants);
              setRestaurant(restaurantInfo);
            }}
          >
            <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;

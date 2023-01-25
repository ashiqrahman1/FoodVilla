import { json, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { cdn_url } from "./Config";
import Shimmer from "./Shimmer";
import MenuCard from "./MenuCard";
const RestroDetails = () => {
  const [restaurant, setRestaurant] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    restuarent_info();
  }, []);
  // const [restaurantMenu, setrestaurantMenu] = useState([]);
  async function restuarent_info() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=10.6345647&lng=76.1203982&menuId=${id}`
    );
    const json = await data.json();
    setRestaurant(json);
    // console.log(restaurant);
  }
  return (
    <div className="menu">
      <div className="menu_background">
        <div className="container">
          <div className="menu_items py-2">
            <div className="menu_top">
              <div className="menu_top_section">
                <img src={cdn_url + restaurant?.data?.cloudinaryImageId} />
                <div className="menu_top_text">
                  <div className="menu_top_heading">
                    <ul>
                      <li>
                        <h2>{restaurant?.data?.name}</h2>
                      </li>
                      <li>
                        <h3>{restaurant?.data?.labels[2]?.message}</h3>
                      </li>
                    </ul>
                    <div className="menu_top_heading_rating">
                      <ul>
                        <li>
                          <h4>{restaurant?.data?.avgRatingString}</h4>
                        </li>
                        <li>
                          <h4>{restaurant?.data?.totalRatingsString}</h4>
                        </li>
                      </ul>
                      <div className="menu_border"></div>
                      <ul>
                        <li>
                          <h4>{restaurant?.data?.sla?.slaString}</h4>
                        </li>
                        <li>
                          <h4>Delivery Time</h4>
                        </li>
                      </ul>
                      <div className="menu_border"></div>
                      <ul>
                        <li>
                          <h4>{restaurant?.data?.totalRatings}</h4>
                        </li>
                        <li>
                          <h4>Cost for two</h4>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="text_center py-2">Menu Items</h2>
        {!restaurant ? (
          <div className="items">
            <Shimmer />
          </div>
        ) : (
          <div className="menu_bottom">
            <div className="menu_bottom_text text_center items">
              {Object.values(restaurant?.data?.menu?.items).map((item) => {
                console.log(item);
                return <MenuCard key={item.key} {...item} />;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestroDetails;

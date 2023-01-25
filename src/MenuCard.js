import { cdn_url } from "./Config";

const MenuCard = ({ name, cloudinaryImageId, description }) => {
  return (
    <div className="card py-2">
      <div className="card__info">
        <div className="card__details">
          <img className="py-1" src={cdn_url + cloudinaryImageId} />
          <h3>{name}</h3>
          <p className="card__cuisines">{description}</p>
        </div>
        <div className="cardinfo__bottom py-1">
          {/* <h4>{avgRating}</h4>
          <h4>{slaString}</h4>
          <h4>{costForTwoString}</h4> */}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;

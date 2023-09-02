import { CDN_URL } from "../utils/constants";

const RestaurantCard = props => {
    const { resData } = props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        costForTwo,
        deliveryTime,
        cuisines,
    } = resData.data;
    return (
        <div className="cardContainer">
            <div className="imageSec">
                <img
                    src={`${CDN_URL}${cloudinaryImageId}`}
                    alt="restaurant image"
                />
            </div>
            <div className="detailContainer">
                <h2>{name}</h2>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{deliveryTime}</h4>
                <h4>₹{costForTwo / 100} FOR TWO</h4>
            </div>
        </div>
    );
};

export default RestaurantCard;

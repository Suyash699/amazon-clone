import { IMG_CDN_URL } from "../config";

const FoodItem = ({
  imageId,
  name,
  description,
  price
}) => {

  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-blue-100 hover:scale-95 rounded-lg">
      <img
        alt="img"
        src={IMG_CDN_URL + imageId}
        className="rounded-lg"
      />
      {/* {console.log(name)} */}
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{description}</h3>
      <h4>Rupees: {price/100}</h4>
    </div>
  );
};

export default FoodItem;

import { Rating } from "@mui/material";

const RestaurantCard = ({ name, img_url, rating, cuisine }) => {
  return (
    <div className="max-w-1/3   bg-white rounded-lg shadow-md hover:shadow-lg transition">
      <img src={img_url} alt={name} className="w-full h-80 object-cover rounded-t-md" />
      <div className="mt-3 p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500 text-sm">{cuisine}</p>
        <div className="flex items-center mt-2">
          <Rating value={rating} precision={0.5} readOnly />
          <span className="ml-2 text-gray-600 text-sm">{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;

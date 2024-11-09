import React from "react";
import { Link } from "react-router-dom";

function RestaurantCard({ detail }) {
  return (
    <div className="w-full border-2 shadow-md relative cursor-pointer rounded-sm">
        <Link to={`/restaurant/${detail._id}`}>
        <img
          src={detail.image || "/img/default_rest_image.webp"}
          alt="restauarnat"
          className="w-full h-[200px] object-cover "
        />
        <div className="p-2">
          <h1 className="font-bold">{detail.name}</h1>
          <h1 className="text-sm font-semibold">{detail.address}</h1>
        </div>

        <div className="absolute top-4 right-4">
          <h1 className="font-bold bg-pink-500 text-white text-[12px] px-2 py-1 rounded-full">
            10% discount on any items
          </h1>
        </div>
    </Link>
      </div>
  );
}

export default RestaurantCard;

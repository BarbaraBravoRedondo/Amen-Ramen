// Item.js
import React from "react";

const Item = ({ dish, addToCart }) => {
  return (
    <div className="bg-[#262837] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
      <img src={dish.img} alt={dish.description} className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
      <p className="text-sm">{dish.description}</p>
      <span className="text-xs text-gray-500">${dish.price}</span>
      
      <button onClick={addToCart} className="bg-[#ec7c6a] text-white mt-2 py-1 px-2 rounded-md">
        Add to Cart
      </button>
    </div>
  );
};

export default Item;

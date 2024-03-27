import React, { useState } from 'react';

const Item = ({ dish, addToCart }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);

    addToCart(dish);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
      <img
        src={dish.img}
        alt={dish.description}
        className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
      />
      <p className="text-sm">{dish.description}</p>
      <span className="text-xs text-gray-500">{dish.price} €</span>

      <button
        onClick={handleClick}
        className={`bg-[#ec7c6a] text-white mt-2 py-1 px-2 rounded-md ${
          isAnimating ? 'animate-pulse transform scale-110' : ''
        }`}
        disabled={isAnimating}
        style={{ cursor: 'pointer' }}
      >
        {isAnimating ? 'Adding...' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default Item;

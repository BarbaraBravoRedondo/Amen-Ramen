// Siderbar.jsx
import React from 'react';
import {
  RiHome6Line,
  RiPercentLine,
  RiShoppingCartLine,
  RiMailLine,
  RiSettings4Line,
  RiCloseLine,
  RiLogoutCircleLine
} from 'react-icons/ri';

function Siderbar({ showMenu, setShowOrder, showContact, setShowContact }) {
  const handleContactClick = () => {
    setShowContact(true);
  };

  const handleCartClick = () => {
    setShowOrder(true);
    setShowContact(false); 
  };

  return (
    <div className={`z-50 transition-all ${showMenu ? "left-0" : "-left-full"} bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl`}>
      <div>
        <ul className="pl-4">
          <li className="my-5 ">
            <img src="Logo.png" className='scale-150' alt="" />
          </li>
          <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl ">
            <a href="#" className="flex justify-center text-white bg-[#ec7c6a] p-4 block rounded-xl text-center">
              <RiHome6Line className="text-2xl " />
            </a>
          </li>
          <li className="bg-[#] p-4 rounded-tl-xl rounded-bl-xl hover:bg-[#262837] group transition-colors ">
            <a href="#" className="transitions-colors group-hover:bg-[#ec7c6a] group-hover:text-white flex justify-center text-[#ec7c6a]  p-4 block rounded-xl text-center" onClick={handleCartClick}>
              <RiShoppingCartLine className="text-2xl " />
            </a>
          </li>
          <li className="bg-[#] p-4 rounded-tl-xl rounded-bl-xl hover:bg-[#262837] group transition-colors ">
            <a href="#" className="transitions-colors group-hover:bg-[#ec7c6a] group-hover:text-white flex justify-center text-[#ec7c6a]  p-4 block rounded-xl text-center" onClick={handleContactClick}>
              <RiMailLine className="text-2xl " />
            </a>
          </li>
          <li className="bg-[#] p-4 rounded-tl-xl rounded-bl-xl hover:bg-[#262837] group transition-colors ">
            <a href="#" className="transitions-colors group-hover:bg-[#ec7c6a] group-hover:text-white flex justify-center text-[#ec7c6a]  p-4 block rounded-xl text-center" onClick={handleContactClick}>
              <RiSettings4Line className="text-2xl " />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="pl-4">
          <li className="bg-[#] p-4 rounded-tl-xl rounded-bl-xl hover:bg-[#262837] group transition-colors ">
            <a href="#" className="transitions-colors group-hover:bg-[#ec7c6a] group-hover:text-white flex justify-center text-[#ec7c6a]  p-4 block rounded-xl text-center">
              <RiLogoutCircleLine className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Siderbar;

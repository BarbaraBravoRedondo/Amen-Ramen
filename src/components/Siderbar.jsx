import React from 'react';
import {
  RiHome6Line,
  RiPercentLine,
  RiPieChartLine,
  RiMailLine,
  RiLogoutCircleLine,
  RiNotification3Line,
  RiSettings4Line,
  RiCloseLine
} from 'react-icons/ri';

function siderbar( {showMenu}) {
    
  return (
    <div className={`z-50 transition-all ${showMenu?"left-0":"-left-full"} bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl`}>
      <div>
        <ul className=" pl-4">
          {' '}
          <li className="text-2xl text-gray-300 uppercase font-bold text-center my-5 ">
            Logo
          </li>
          <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl ">
            <a
              href="#"
              className="flex justify-center text-white bg-[#ec7c6a] p-4 block rounded-xl text-center"
            >
              <RiHome6Line className="text-2xl " />
            </a>
          </li>
          <li className="bg-[#] p-4 rounded-tl-xl rounded-bl-xl hover:bg-[#262837] group transition-colors ">
            <a
              href="#"
              className="transitions-colors group-hover:bg-[#ec7c6a] group-hover:text-white flex justify-center text-[#ec7c6a]  p-4 block rounded-xl text-center"
            >
              <RiPercentLine className="text-2xl " />
            </a>
          </li>
          <li className="bg-[#] p-4 rounded-tl-xl rounded-bl-xl hover:bg-[#262837] group transition-colors ">
            <a
              href="#"
              className="transitions-colors group-hover:bg-[#ec7c6a] group-hover:text-white flex justify-center text-[#ec7c6a]  p-4 block rounded-xl text-center"
            >
              <RiPieChartLine className="text-2xl " />
            </a>
          </li>
          <li className="bg-[#] p-4 rounded-tl-xl rounded-bl-xl hover:bg-[#262837] group transition-colors ">
            <a
              href="#"
              className="transitions-colors group-hover:bg-[#ec7c6a] group-hover:text-white flex justify-center text-[#ec7c6a]  p-4 block rounded-xl text-center"
            >
              <RiMailLine className="text-2xl " />
            </a>
          </li>
          <li className="bg-[#] p-4 rounded-tl-xl rounded-bl-xl hover:bg-[#262837] group transition-colors ">
            <a
              href="#"
              className="transitions-colors group-hover:bg-[#ec7c6a] group-hover:text-white flex justify-center text-[#ec7c6a]  p-4 block rounded-xl text-center"
            >
              <RiSettings4Line className="text-2xl " />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="pl-4">
          <li className="bg-[#] p-4 rounded-tl-xl rounded-bl-xl hover:bg-[#262837] group transition-colors ">
            <a
              href="#"
              className="transitions-colors group-hover:bg-[#ec7c6a] group-hover:text-white flex justify-center text-[#ec7c6a]  p-4 block rounded-xl text-center"
            >
              <RiLogoutCircleLine className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default siderbar;

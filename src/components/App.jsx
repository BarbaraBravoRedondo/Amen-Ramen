import Sidebar from './Siderbar';
import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
  RiSearch2Line,
  RiArrowDownSLine,
} from 'react-icons/ri';
import '../styles/index.css';
import { useState } from 'react';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-2xl text-gray-400 p-4 flex items-center justify-between px-8 rounded-tl-xl rounded-tr-xl">
        <button className=" p-2">
          <RiUser3Line />
        </button>
        <button className=" p-2">
          <RiAddLine />
        </button>
        <button className=" p-2">
          <RiPieChartLine />
        </button>{' '}
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 p-4  pb-20">
        <div className="lg:col-span-6 md:p-8">
          <header className=" ">
            <div className="flex flex-col gap-4 mb-6 md:flex-row md:justify-between md:items-center">
              <div>
                <h1 className="text-2xl text-gray-300 ">Amen Ramen</h1>{' '}
                <p className="text-gray-500">26 Marzo 2024</p>
              </div>
              <form action="">
                <div className="w-full relative">
                  <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input
                    type="text"
                    className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
                    placeholder="Search.."
                  />
                </div>
              </form>
            </div>
            <nav className="text-gray-300 flex items-center justify-between border-b mb-6 lg:justify-start lg:gap-8">
              <a
                href="#"
                className=" py-2 pr-4 border-[#ec7c6a] text-[#ec7c6a] before:w-1/2 before:h-1 before:absolute relative before:bg-[#ec7c6a] before-:left-0 before:rounded-full before:-bottom-[1.5px] text-[#ec7c6a]"
              >
                Hot dishes
              </a>
              <a href="#" className="py-2 pr-4 ">
                Cold dishes
              </a>
              <a href="#" className=" py-2 pr-4 ">
                Soup
              </a>
              <a href="#" className=" py-2 pr-4 ">
                Grill{' '}
              </a>
              {/* <a href="#" className='border-b py-2'>Appetizer</a> */}
            </nav>
          </header>{' '}
          <div className="flex items-center justify-between mb-16 ">
            <h2 className="text-xl text-gray-300">Choose Dishes</h2>
            <button
              className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4
              "
            >
              <RiArrowDownSLine />
              Dine In
            </button>
          </div>
          <div className="p-8 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-center text-gray-300 gap-2">
              <img
                src="plato1.png"
                alt=""
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Spicy seasoned Ramen</p>
              <span className="text-gray-400">$10.50</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-center text-gray-300 gap-2">
              <img
                src="plato2.png"
                alt=""
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Spicy seasoned Ramen</p>
              <span className="text-gray-400">$10.50</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-center text-gray-300 gap-2">
              <img
                src="plato3.png"
                alt=""
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Spicy seasoned Ramen</p>
              <span className="text-gray-400">$10.50</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-center text-gray-300 gap-2">
              <img
                src="plato4.png"
                alt=""
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Spicy seasoned Ramen</p>
              <span className="text-gray-400">$10.50</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-center text-gray-300 gap-2">
              <img
                src="plato5.png"
                alt=""
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Spicy seasoned Ramen</p>
              <span className="text-gray-400">$10.50</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-center text-gray-300 gap-2">
              <img
                src="plato1.png"
                alt=""
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Spicy seasoned Ramen</p>
              <span className="text-gray-400">$10.50</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2  fixed lg:static right-0">Carrito</div>
      </main>
    </div>
  );
}
export default App;

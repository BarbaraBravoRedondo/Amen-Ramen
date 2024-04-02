import React, { useState, useEffect } from 'react';
import { RiSearch2Line } from 'react-icons/ri';

function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
   
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);
    setCurrentDate(formattedDate);
  }, []); 

  const handleChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term); 
  };

  return (
    <header>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
          <h1 className="text-2xl text-gray-300">Amen RameN</h1>
          <p className="text-gray-500">{currentDate}</p>
        </div>
        <form>
          <div className="w-full relative">
            <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
            <input
              type="text"
              className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
              placeholder="Search"
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
        </form>
    
 
      <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
        <a
          href="#"
          className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]"
        >
         Ramen
        </a>
        <a href="#" className="py-2 pr-4">
          Cold dishes
        </a>
        <a href="#" className="py-2 pr-4">
          Rice
        </a>
        <a href="#" className="py-2">
          Grill
        </a>
      </nav>
    </header>
  );
}

export default Header;

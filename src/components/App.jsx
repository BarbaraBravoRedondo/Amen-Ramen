import React, { useState, useEffect } from 'react';
import Header from './Header';
import Item from './Item';
import Trolley from './Trolley';
import Siderbar from './Siderbar';
import '../styles/index.css';
import {
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiMenu3Fill,
  RiCloseLine,
} from 'react-icons/ri';
import ramen from './data/Ramen.json';

// Definir dishes fuera de la función App para que esté disponible en todo el componente


function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [cart, setCart] = useState([]);
  const [orderNumber, setOrderNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDishes, setFilteredDishes] = useState([]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term.trim() === '') {
      setFilteredDishes(ramen); 
    } else {
      const filtered = ramen.filter((dish) =>
        dish.description.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredDishes(filtered);
    }
  };

  const addToCart = (dish) => {
    const itemIndex = cart.findIndex((item) => item.id === dish.id);
    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...dish, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  useEffect(() => {
  
    const randomNumber = Math.floor(Math.random() * 1000000) + 1; 
    setOrderNumber(randomNumber);
   
    handleSearch(searchTerm);
  }, []);

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Siderbar showMenu={showMenu} />
      <Trolley
        showOrder={showOrder}
        orderNumber={orderNumber}
        setShowOrder={setShowOrder}
        cart={cart}
        removeFromCart={removeFromCart}
      />
      {/* Menu móvil */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button onClick={toggleOrders} className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className="md:p-8 p-4">
          {/* Header */}
          <Header onSearch={handleSearch} />
          {/* Title content */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Choose Dishes</h2>
          </div>
          {/* Content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          
            {filteredDishes.map((dish) => (
              <Item key={dish.id} dish={dish} addToCart={() => addToCart(dish)} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

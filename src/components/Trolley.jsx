// Trolley.jsx
import React from 'react';
import { RiCloseLine, RiDeleteBin6Line } from 'react-icons/ri';

const Trolley = ({ showOrder, setShowOrder, cart, removeFromCart, orderNumber }) => {
  return (
    <div className={`lg:col-span-2 fixed top-0 bg-[#1F1D2B] w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${showOrder ? 'right-0' : '-right-full'}`}>
      <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full">
        <RiCloseLine onClick={() => setShowOrder(false)} className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl" />
        <h1 className="text-2xl my-4">#{orderNumber}</h1>
        {cart.length > 0 ? (
          <div className="overflow-y-auto max-h-96">
            <div> {/* Ajusta la altura máxima aquí */}
              {/* Iterar sobre los elementos del carrito */}
              {cart.map(item => (
                <div key={item.id} className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-4">
                    <div className="col-span-4 flex items-center gap-3">
                      <img src={item.img} alt={item.description} className="w-10 h-10 object-cover" />
                      <div>
                        <h5 className="text-sm">{item.description}</h5>
                        <p className="text-xs text-gray-500">{`$${item.price}`}</p>
                      </div>
                    </div>
                    <div>
                      <span>{item.quantity}</span>
                    </div>
                    <div>
                    <span>{`$${cart.reduce((total, item) => total + Number((item.price * item.quantity).toFixed(2)), 0).toFixed(2)}`}</span>


                    </div>
                  </div>
                  <div className="grid grid-cols-6 items-center">
                    <form className="col-span-5">
                      <input type="text" className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none" placeholder="Order note..." />
                    </form>
                    <div>
                      {/* Agregar la función para eliminar del carrito */}
                      <button className="border border-red-500 p-2 rounded-lg" onClick={() => removeFromCart(item.id)}>
                        <RiDeleteBin6Line className="text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Calcular el subtotal */}
            <div className="bg-[#262837] absolute w-full bottom-0 left-0 p-4">
              <div className="flex items-center justify-between mb-6">
                <span className="text-gray-400">Subtotal</span>
                <span>{`$${cart.reduce((total, item) => total + item.price * item.quantity, 0)}`}</span>
              </div>
              <div>
                <button className="bg-[#ec7c6a] w-full py-2 px-4 rounded-lg">
                  Continue to payment
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p>No hay elementos en el carrito</p>
        )}
      </div>
    </div>
  );
};

export default Trolley;

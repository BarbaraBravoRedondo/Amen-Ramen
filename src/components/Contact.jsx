import React, { useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';

function Contact({ showContact, setContact }) {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false); // Estado para controlar si se envió el mensaje
  const [formVisible, setFormVisible] = useState(true); // Estado para controlar la visibilidad del formulario

  const handleCloseClick = () => {
    setContact(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const mailtoLink = `mailto:barbarabravoredongo@gmail.com?subject=Message from ${email}&body=Phone Number: ${phoneNumber}%0A%0A${message}`;
    window.location.href = mailtoLink;

   
    setMessageSent(true);
    setFormVisible(false);

   
    setEmail('');
    setPhoneNumber('');
    setMessage('');
  };

  return (
    <div className={`lg:col-span-2 fixed top-0 bg-gray-800 w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${showContact ? 'right-0' : '-right-full'}`}>
      <RiCloseLine onClick={handleCloseClick} className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-gray-700 rounded-full text-xl" />
      <h1 className="text-2xl my-4 text-white">Contact us:</h1>

     
      {messageSent && (
        <p className="text-green-500">Message sent! We will get in touch with you about your query.</p>
      )}

     
      {formVisible && (
        <form onSubmit={handleSubmit} className="px-4 py-6">
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-300 mb-2">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-900 text-gray-300 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-300 mb-2">Message:</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-900 text-gray-300 focus:outline-none focus:border-indigo-500"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}

export default Contact;

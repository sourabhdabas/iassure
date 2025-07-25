import React from 'react';

const Header = () => {
  return (
    <header className="bg-white p-4 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-6">
          <button className="text-gray-600">All Categories</button>
          <button className="text-gray-600">Promotions</button>
          <button className="text-gray-600">Stores</button>
          <button className="text-gray-600">Our Contacts</button>
          <button className="text-gray-600">Delivery & Return</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

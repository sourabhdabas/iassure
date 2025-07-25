import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaHeadset, FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md px-4 py-2">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/pranjal-nehete" className="text-xl font-bold text-blue-600">
          WoodMart
        </Link>

        {/* Search Bar (hidden on mobile) */}
        <div className="hidden md:block flex-1 mx-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
          />
        </div>

        {/* Icons (visible on desktop) */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/support">
            <FaHeadset className="text-xl" title="Support" />
          </Link>
          <Link to="/cart">
            <FaShoppingCart className="text-xl" title="Cart" />
          </Link>
          <Link to="/account">
            <FaUser className="text-xl" title="Account" />
          </Link>
        </div>

        {/* Hamburger Menu (visible on mobile) */}
        <button className="md:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu (shown if mobile menu is open) */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 py-2 space-y-2 bg-white shadow-lg">
          <Link to="/" className="block text-blue-600">Home</Link>
          <Link to="/promotions" className="block text-blue-600">Promotions</Link>
          <Link to="/stores" className="block text-blue-600">Stores</Link>
          <Link to="/contacts" className="block text-blue-600">Our Contacts</Link>
          <Link to="/delivery-return" className="block text-blue-600">Delivery & Return</Link>
          <Link to="/outlet" className="block text-blue-600">Outlet</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

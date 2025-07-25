import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto flex justify-between">
        <div>© 2025 WoodMart</div>
        <div className="space-x-4">
          <a href="#" className="text-white">Privacy</a>
          <a href="#" className="text-white">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

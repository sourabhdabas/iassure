import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-purple-600 text-white p-12">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold">Apple Shopping Event</div>
        <div className="space-y-4">
          <p>Shop great deals on MacBook, iPad, iPhone, and more.</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md">Shop Now</button>
        </div>
      </div>
      <div className="absolute top-0 right-0 p-4">
        <img src="your-image-path.jpg" alt="Apple Products" />
      </div>
    </section>
  );
};

export default HeroSection;

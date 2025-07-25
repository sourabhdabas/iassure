import React from 'react';

const ProductCategories = () => {
  return (
    <section className="p-12">
      <h2 className="text-2xl font-bold mb-4">Popular Categories</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="border p-4 text-center">Laptops, Tablets & PCs</div>
        <div className="border p-4 text-center">Smartphones</div>
        <div className="border p-4 text-center">Games & Entertainment</div>
        <div className="border p-4 text-center">Photo & Video</div>
      </div>
    </section>
  );
};

export default ProductCategories;

import React from 'react';
import { useSelector } from 'react-redux';

const SearchResults = () => {
    const { items, loading, error } = useSelector((state) => state.products);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!Array.isArray(items) || items.length === 0) return <p>No products found.</p>;
  
    return (
      <div className="grid grid-cols-3 gap-4 p-4">
        {items.map((product) => (
          <div key={product.id} className="border p-2">
            <img src={product.image} alt={product.title} className="h-32 object-contain" />
            <h2 className="font-bold">{product.title}</h2>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    );
  };
export default SearchResults;  



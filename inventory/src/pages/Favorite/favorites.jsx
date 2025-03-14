import React, { useState, useEffect } from 'react';

const favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || {};
    setFavorites(Object.values(storedFavorites)); 
  }, []);

  return (
    <div className='container'>
      <h2 className='ttl-02'>Favorites</h2>
      <ul className="list-card">
        {favorites.length === 0 ? (
          <p>No favorites added yet.</p>
        ) : (
          favorites.map((product) => (
            <li key={product.id} className="list-card__item">
              <div className="list-card__img img">
                <img className='img__main' src={product.img} alt="" />
              </div>
              <div className="list-card__info">
                <h3 className="list-card__ttl">{product.name}</h3>
                <p className="list-card__txt">{product.txt}</p>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default favorites;

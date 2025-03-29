import React, { useState, useEffect } from 'react';
import img02 from "../../assets/common/delete.png";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || {};
    setFavorites(Object.values(storedFavorites));
  }, []);

  const handleDelete = (id) => {
    const updatedFavorites = favorites.filter(product => product.id !== id);
    
    setFavorites(updatedFavorites);
    
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || {};
    delete storedFavorites[id];
    localStorage.setItem("favorites", JSON.stringify(storedFavorites));
  };

  return (
    <div className='container'>
      <h2 className='ttl-02'>Favorites</h2>
      <div className="favorites">
        <ul className="list-favorites">
          <li className='list-favorites__item'><h2 className='list-favorites__ttl'>Image</h2></li>
          <li className='list-favorites__item'><h2 className='list-favorites__ttl'>Name</h2></li>
          <li className='list-favorites__item'><h2 className='list-favorites__ttl'>Description</h2></li>
        </ul>

        {favorites.length === 0 ? (
          <p>No favorites added yet.</p>
        ) : (
          favorites.map((product) => (
            <div key={product.id} className="favorites__info">
              <div className="favorites__img img">
                <img className='img__main' src={product.img} alt={product.name} />
              </div>
              <h3 className="favorites__ttl">{product.name}</h3>
              <p className="favorites__txt">{product.txt}</p>
              <img 
                className='favorites__delete' 
                src={img02} 
                alt="Delete" 
                onClick={() => handleDelete(product.id)}
                style={{ cursor: "pointer" }}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;

import React, { useRef, useState, useEffect } from 'react';
import CardModal from '../../../components/modal/cardModal';
import fav from "../../../assets/common/pin.png";
import fav2 from "../../../assets/common/pin-filled.png";

const dashboard = () => {
  const inputRef = useRef("");
  const [products, setProducts] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || {}; 
  });

  useEffect(() => {
    fetch("/json/product.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.Products))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleOpenModal = (cardData) => {
    setSelectedCard(cardData);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search Value:", inputRef.current.value);
  };

  const handleFavorite = (product) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = { ...prevFavorites };
      
      if (updatedFavorites[product.id]) {
        delete updatedFavorites[product.id]; 
      } else {
        updatedFavorites[product.id] = product;
      }

      localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); 
      return updatedFavorites;
    });
  };

  return (
    <div className='top-dashboard'>
      <h2 className='ttl-01'>Search Items</h2>
      <form className='search-form' onChange={handleSubmit}>
        <input type='text' className='search-form__input' placeholder='Search items...' ref={inputRef} />
      </form>
      <ul className="list-card">
        {products.map((product) => (
          <li key={product.id} className="list-card__item">
            <a className="list-card__link" href="#" onClick={(e) => {
              e.preventDefault();
              handleOpenModal(product);
            }}>
              <div className="list-card__img img">
                <div className="list-card__fav" onClick={(e) => {
                  e.stopPropagation();
                  handleFavorite(product);
                }}>
                  <img src={favorites[product.id] ? fav2 : fav} alt="favorites" />
                </div>
                <img className='img__main' src={product.img} alt="" />
              </div>
              <div className="list-card__info">
                <h3 className="list-card__ttl">{product.name}</h3>
                <p className="list-card__txt">{product.txt}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
      {selectedCard && (
        <CardModal
          img={selectedCard.img}
          title={selectedCard.name}
          description={selectedCard.txt}
          price={selectedCard.price}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default dashboard;

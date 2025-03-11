import React from 'react'
import { useRef, useState,useEffect } from 'react';
import CardModal from '../../../components/modal/cardModal';
const dashboard = () => {
  const inputRef = useRef("");
  const [products, setProducts] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleOpenModal = (cardData) => {
    setSelectedCard(cardData);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search Value:",inputRef.current.value);
  };

  //API PRODUCTS
  useEffect (() => {
    fetch("/json/product.json")
    .then((response) => response.json())
    .then((data) => setProducts(data.Products))
    .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className='top-dashboard'>
      <h2 className='ttl-01'>Search Items</h2>
      <form className='search-form' onChange={handleSubmit}>
        <input type='text' className='search-form__input' placeholder='Search items...' ref={inputRef}  />
      </form>
      <ul className="list-card">
        {products.map((product)=>(
          <li className="list-card__item">
            <a className="list-card__link" onClick={(e) => {
              e.preventDefault(); 
              handleOpenModal(product);
              }}>
                <div className="list-card__img img">
                  <img className='img__main' src={product.img} alt="Placeholder" />
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
  )
}

export default dashboard;
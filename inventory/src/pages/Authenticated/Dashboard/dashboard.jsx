import React, { useRef, useState, useEffect } from 'react';
import CardModal from '../../../components/modal/cardModal';
import fav from "../../../assets/common/pin.png";
import fav2 from "../../../assets/common/pin-filled.png";

const dashboard = () => {
  const capitalizeWords = (text) => text.replace(/\b\w/g, (char) => char.toUpperCase());
  const toLowerCaseText = (text) => text.toLowerCase();
  const inputRef = useRef("");
  const [products, setProducts] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [searchQuery, setSearchQuery] = useState(null);
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || {}; 
  });

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);
  
    return () =>{
      clearTimeout(handler);
    }
  },[searchQuery]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url =
          debouncedQuery === "" || searchQuery == null
          ? "http://localhost:8080/getItemDetails"
          : `http://localhost:8080/searchItems`;
  
          const response = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "query": `${toLowerCaseText(debouncedQuery)}`,
            },
          });
  
          if (!response.ok){
            throw new Error("Failed to fetch data");
          }
  
          const data = await response.json();
  
          if (Array.isArray(data)){
            setProducts(data);
          } else {
            setProducts([]);
          }
          
      } catch (error) {
          console.log("Error Fetching Data: ", error);
          setProducts([]); 
      }
    };
  
    if(debouncedQuery !== null) {
      fetchProducts();
    }
  }, [debouncedQuery]);

  const handleOpenModal = (cardData) => {
    setSelectedCard(cardData);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearchQuery(inputRef.current.value);
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
      <form className='search-form' onChange={handleSearch}>
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
                <h3 className="list-card__ttl">{capitalizeWords(product.name)}</h3>
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

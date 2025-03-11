import React,{useState} from 'react'

const cardModal = ({img, title, description,price, onClose}) => {
    const [cartCount, setCartCount] = useState(0);

    const increaseCart = () => {
      setCartCount(cartCount + 1);
    };
  
    const decreaseCart = () => {
      if (cartCount > 0) {
        setCartCount(cartCount - 1);
      }
    };
  return (
    <>
      <div className='modal'>
        <div className="modal__info">
            <span className="modal__close" onClick={onClose}>X</span>
            <div className="modal__img img">
                <img className="img__main" src={img} alt={title} />
            </div>
            <h3 className="modal__ttl">{title}</h3>
            <p className="modal__txt">{description}</p>
            <p className="modal__txt">{price}</p>
            <div className="modal__cart">
                <button onClick={decreaseCart} disabled={cartCount === 0}> - </button>
                <span>{cartCount}</span>
                <button onClick={increaseCart}> + </button>
            </div>

            
        </div>
      </div>
    </>
  )
}

export default cardModal
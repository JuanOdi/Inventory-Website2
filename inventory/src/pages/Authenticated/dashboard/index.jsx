import React from 'react'
import { useRef } from 'react';

const index = () => {
    const inputRef = useRef("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Search Value:",inputRef.current.value);
    };
  return (
    <div className='dashboard'>
        <h2 className='ttl-01'>Search Items</h2>
        <form className='search-form' onChange={handleSubmit}>
            <input type='text' className='search-form__input' placeholder='Search items...' ref={inputRef}  />
        </form>
        <div className="box-card">
            
        </div>


    </div>
  )
}

export default index
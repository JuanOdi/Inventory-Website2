import React from 'react'
import img01 from "../../assets/addITem/upload.png";

const addItem = ({isOpen,onClose, children}) => {
    if (!isOpen) return null;
  return (
    <>
        <div className="addItem">
            <div className="addItem__info">
                <span className="sign-up__close" onClick={onClose}>X</span>
                <ul className="list-addItem">
                    <li className='list-addItem__item'>
                        <h2 className='list-addItem__ttl'>Image</h2>
                    </li>
                    <li className='list-addItem__item'>
                        <h2 className='list-addItem__ttl'>Name</h2>
                    </li>
                    <li className='list-addItem__item'>
                        <h2 className='list-addItem__ttl'>Description</h2>
                    </li>
                </ul>
                <div className="addItem__wrap">
                    <div className="addItem__item">
                        <img className ="addItem__img" src={img01} alt="" />
                    </div>
                    <div className="addItem__item">
                        <input className='addItem__input' type="text" />
                    </div>
                    <div className="addItem__item">
                        <input className='addItem__input' type="text" />
                    </div>
                </div>
                <div className="addItem__btn-wrap">
                    <button className="addItem__btn-add">Add</button>
                    <button className="addItem__btn-save ">Save</button>
                </div>
            </div>
            {children}

        </div>
    </>
  )
}

export default addItem
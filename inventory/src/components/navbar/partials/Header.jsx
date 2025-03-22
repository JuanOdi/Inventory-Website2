import React from 'react';
import { useState } from 'react';
import logo from '../../../assets/common/logo.png';
import img01 from '../../../assets/common/search.png';
import img02 from '../../../assets/common/history.png';
import img03 from '../../../assets/common/favorite.png';
import SignUp from '../../modal/signUp';
import SignIn from '../../modal/signIn';
import AddItem from '../../modal/addItem';

const Header = () => {
    const [isSignUpOpen, setSignUpOpen] = useState(false);
    const [isSignInOpen, setSignInOpen] = useState(false);
    const [addItemOpen, setAddItemOpen] = useState(false);

    
  return (
    <>
     <header class="header">
        <div class="header__bars menu-bar hidden-pc js-menu">
            <span class="menu-bar__middle"></span>
        </div>
        <a class="header__home" href="">
            <img className="header__logo" src={logo} alt="Logo" />
            <p className="header__link">Inventory</p>
        </a>
        <div className='btn'>
            <a className ="btn__link" href='#'  onClick={() => setAddItemOpen(true)}>
                Add Item Entry
            </a>
        </div>
        <nav class="header__nav">
            <ul class="header__menu menu">
                <li class="menu__item menu__item--01">
                    <a class="menu__link" href="/">
                        <img className="menu__img" src={img01} alt="" />
                        <span class="menu__ttl is-active">Home</span>
                    </a>
                </li>
                <li class="menu__item menu__item--02">
                    <a class="menu__link" href="#">
                        <img className="menu__img" src={img02} alt="" />
                        <span class="menu__ttl">History</span>
                    </a>
                </li>
                <li class="menu__item menu__item--03">
                    <a class="menu__link" href="/favorites">
                        <img className="menu__img" src={img03} alt="" />
                        <span class="menu__ttl">Favorites</span>
                    </a>
                </li>
            </ul>
        </nav>
        <div className='btn-01'>
            <a className ="btn-01__link" href='#' onClick={() => setSignInOpen(true)}>
                Sign In
            </a>
        </div>
        <div className='btn-01'>
            <a className ="btn-01__link btn-01__link--black" href='#' onClick={() => setSignUpOpen(true)}>
                Sign Up
            </a>
        </div>
            <SignUp isOpen={isSignUpOpen} onClose={() => setSignUpOpen(false)}/>
            <SignIn isOpen={isSignInOpen} onClose={() => setSignInOpen(false)}/>
            <AddItem isOpen={addItemOpen} onClose={() => setAddItemOpen(false)}/>
        </header> 
    </>
  )
}

export default Header
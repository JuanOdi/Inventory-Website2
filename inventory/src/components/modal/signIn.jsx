import React from 'react'
import google from "../../assets/common/google.png";
import facebook from "../../assets/common/facebook.png";

const signIn = ({isOpen, onClose , children}) => {
  return (
    <>
        <div className={`sign-up ${isOpen ? "active" : ""}`}>
            <div className="sign-up__info">
                <span className="sign-up__close" onClick={onClose}>X</span>
                <h2 className="sign-up__ttl">Sign in for instant<br/> supplier responses</h2>
                <form action="" className="sign-up__form">
                    <label for="email">Email or Username</label>
                        <input type="email"  placeholder="Email" />
                    <label for="password">Password</label>
                        <input type="password"  placeholder="Password" />
                    <button type="submit" >Sign In</button>
                </form>
                <p className="sign-up__txt">Or</p>
                <a href="#" className="sign-up__link">
                    <img className="sign-up__img" src={google} alt="" />
                    <p className="sign-up__link-txt">Continue with Google</p>
                </a>
                <a href="#" className="sign-up__link">
                    <img className="sign-up__img" src={facebook} alt="" />
                    <p className="sign-up__link-txt">Continue with Facebook</p>
                </a>
                {children}
            </div>
        </div>
    </>
  )
}

export default signIn
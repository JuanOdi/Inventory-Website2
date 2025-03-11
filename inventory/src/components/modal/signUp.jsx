
import React,{useState} from 'react'
import google from "../../assets/common/google.png";
import facebook from "../../assets/common/facebook.png";
const signUp = ({isOpen, onClose , children}) => {
  return (
    <>
        <div className={`sign-up ${isOpen ? "active" : ""}`}>
            <div className="sign-up__info">
                <span className="sign-up__close" onClick={onClose}  >X</span>
                <h2 className="sign-up__ttl">Sign Up for instant<br/> supplier responses</h2>
                <form action="" className="sign-up__form">
                    <label for="email">Enter your email </label>
                        <input type="email"  placeholder="Email" />
                    <button type="submit" >Continue</button>
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

export default signUp
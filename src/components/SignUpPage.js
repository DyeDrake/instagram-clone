import React from "react";
import microsoftImage from "../assets/microsoft-icon.png";
import instagramLogoImage from "../assets/instagram-logo.png";
import googleImage from '../assets/google-icon.png';
import facebookImage from "../assets/facebookicon.svg";
import "../styles/signUpPage.css";

const SignUpPage = () => {
  return (
   <div className="signUp-container">
  <div className="box-1">
     <div className="box-1-logo">
    <img src={instagramLogoImage} alt="#" className="instagram-logo"/>
  </div>
    <div className="sign-up-message-1">
      Sign up to see photos and videos from your friends.
    </div>
     <button className="log-in-with-facebook"> <img className="Facebook-icon" src={facebookImage} alt=""/>
        Log in with Facebook
      </button>
    <div className="lines-box">
      <div className="line-1"></div>
      <div className="or-box">OR</div>
      <div className="line-2"></div>
    </div>
    <div className="input-box-mobileNumberOrEmail">
      <input type="text" placeholder="Mobile Number or Email"/>
    </div>
    <div className="input-box-fullName">
      <input type="text" placeholder="Full Name"/>
    </div>
    <div className="input-box-username">
      <input type="text" placeholder="Username"/>
    </div>
    <div className="input-box-password">
      <input type="text" placeholder="Password"/>
    </div>
    <div className="secondary-message" id="m1">
      People who use our service may have uploaded your contact information to Instagram.
      <a className="links" href=""> Learn more</a>
    </div>
    <br/>
      <div className="secondary-message" id="m2">
        By signing up, you agree to our <a href="">Terms</a>,
          <a className="links" href=""> Privacy Policy</a> and
            <a className="links" href=""> Cookie Policy</a>
      </div>
    <div>
       <button>
        Sign up
      </button>
    </div>
  </div>
  <div className="box-2">
      <p>Have an account? <span className="log-in"></span> <a className="links" href="">Sign in</a> </p>
  </div>
  <div className="get-the-app">
    <p>Get the app</p>
  </div>
  <div className="google-play-microsoft-store-box">
    <img src={googleImage} alt="#" className="google-play-store"/>
    <img src={microsoftImage} alt="#" className="microsoft-store"/>
  </div>
</div>
      // <footer className></footer>
    );
};

export default SignUpPage;


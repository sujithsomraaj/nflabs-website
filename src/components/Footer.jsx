import React from 'react';
import fb from "../assets/FB.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import telegram from "../assets/telegram.svg";

export default class Footer extends React.Component{
    render(){
        return(
            <div className="footer-wrapper">
                <div className="footer container">
                    <p>
                        Copyright © 2020-2021
                    </p>
                    <p className="footer-tab2">
                    <span><a href="##">Privacy Policy</a></span> | <span><a href="##">Terms & Conditions</a></span>  | <span><a href="##">Disclaimer</a></span> 
                    </p>
                    <div className="social-icons">
                        <div className="social-items"><a href="##" target="_blank" rel="noopener noreferrer"><img src={fb} alt="Petcoin Facebook"/></a></div>
                        <div className="social-items"><a href="##" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Petcoin Instagram"/></a></div>
                        <div className="social-items"><a href="##" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Petcoin Twitter"/></a></div>
                        <div className="social-items"><a href="##" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="Petcoin Linkedin"/></a></div>
                        <div className="social-items"><a href="##" target="_blank" rel="noopener noreferrer"><img src={telegram} alt="Petcoin Telegram"/></a></div>
                    </div>
                </div>
            </div>
        )
    }
}
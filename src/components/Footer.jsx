import React from 'react';
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import telegram from "../assets/telegram.svg";

export default class Footer extends React.Component{
    render(){
        return(
            <div className="footer-wrapper">
                <div className="footer container">
                <div className="social-icons">
                        <div className="social-items"><a href="##" target="_blank" rel="noopener noreferrer"><img width="18px" height="14px" src={facebook} alt="Petcoin Facebook"/></a></div>
                        <div className="social-items"><a href="##" target="_blank" rel="noopener noreferrer"><img width="16px" height="14px" src={instagram} alt="Petcoin Instagram"/></a></div>
                        <div className="social-items"><a href="##" target="_blank" rel="noopener noreferrer"><img width="16px" height="14px" src={twitter} alt="Petcoin Twitter"/></a></div>
                        <div className="social-items"><a href="##" target="_blank" rel="noopener noreferrer"><img width="16px" height="14px" src={linkedin} alt="Petcoin Linkedin"/></a></div>
                        <div className="social-items"><a href="##" target="_blank" rel="noopener noreferrer"><img width="16px" height="14px" src={telegram} alt="Petcoin Telegram"/></a></div>
                    </div>
                    <p className="footer-tab2">
                    <span><a href="##">Privacy Policy</a></span> | <span><a href="##">Terms & Conditions</a></span>  | <span><a href="##">Disclaimer</a></span> 
                    </p>
                    <p className="copy">
                    © 2021 NF Labs. All rights reserved.
                    </p>
                </div>
            </div>
        )
    }
}
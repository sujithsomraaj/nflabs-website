import React from 'react';
import {
    FaFacebook, 
    FaInstagram, 
    FaTwitter, 
    FaLinkedinIn, 
    FaTelegramPlane, 
    FaMediumM} from "react-icons/fa";


export default class Footer extends React.Component{
    render(){
        return(
            <div className="footer-wrapper">
                <div className="footer container">
                <div className="social-icons">
                        <div className="social-items"><a href="https://www.facebook.com/NFLabs.io/" target="_blank" rel="noopener noreferrer"><FaFacebook/></a>
                        </div>
                        <div className="social-items"><a href="https://www.instagram.com/nflabs.io/" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
                        </div>
                        <div className="social-items"><a href="https://twitter.com/labs_nf" target="_blank" rel="noopener noreferrer"><FaTwitter/></a>
                        </div>
                        <div className="social-items"><a href="https://www.linkedin.com/company/nf-labs/about/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn/></a>
                        </div>
                        <div className="social-items"><a href="##" target="_blank" rel="noopener noreferrer"><FaTelegramPlane/></a>
                        </div>
                        <div className="social-items"><a href="https://medium.com/@NFLabs" target="_blank" rel="noopener noreferrer"><FaMediumM/></a>
                        </div>
                    </div>
                    <p className="footer-tab2">
                    <span><a href="/privacy-policy">Privacy Policy</a></span> | <span><a href="/terms-and-conditions">Terms & Conditions</a></span>  | <span><a href="/disclaimer">Disclaimer</a></span> 
                    </p>
                    <p className="copy">
                    © 2021 NF Labs. All rights reserved.
                    </p>
                </div>
            </div>
        )
    }
}
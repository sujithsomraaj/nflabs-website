import React from 'react';
import {GrFacebookOption} from "react-icons/gr";
import {ImInstagram} from "react-icons/im";
import {FaTwitter, FaLinkedin, FaTelegramPlane} from "react-icons/fa";


export default class Footer extends React.Component{
    render(){
        return(
            <div className="footer-wrapper">
                <div className="footer container">
                <div className="social-icons">
                        <div className="social-items"><a href="##" target="_blank" rel="noopener noreferrer"><GrFacebookOption/></a>
                        </div>
                        <div className="social-items"><a style={{fontSize:"17px"}} href="##" target="_blank" rel="noopener noreferrer"><ImInstagram/></a>
                        </div>
                        <div className="social-items"><a href="##" target="_blank" rel="noopener noreferrer"><FaTwitter/></a>
                        </div>
                        <div className="social-items"><a href="##" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                        </div>
                        <div className="social-items"><a href="##" target="_blank" rel="noopener noreferrer"><FaTelegramPlane/></a>
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
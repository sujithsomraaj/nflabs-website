import React from "react"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Map from "../assets/uk_map.png"
import email from "../assets/email.svg"
import telephone from "../assets/telephone.svg"
import location from "../assets/location.svg"

export default class ContactUs extends React.Component{
    render(){
        return (
            <div>
                <Navbar/>
                <div className="products-wrapper mg-buttom">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Get in touch and let us know how we can help you.</p>
                </div>
                <div className="contact-form-wrapper container">
                    <div className="contact-form">
                        <h3 className="form-heading form-group">Enquiry Form:</h3>
                        <form className="form">
                            <div className="name form-group">
                            <div className="form-group2">
                                <input type="text" placeholder="First Name" required/>
                            </div>
                            <div>
                                <input type="text" placeholder="Last Name" required/>
                            </div>
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Email Id" required/>
                            </div>
                            <div className="form-group">
                                <textarea type="text" placeholder="Message" cols="30" rows="4" required/>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Submit"/>
                            </div>
                        </form>
                    </div>
                    <div className="contact-details">
                        <div className="map-container"><img src={Map} alt="Singapore Map"/></div>
                        <div className="contact-info">
                            <h3>Contact Information:</h3>
                            <div className="contact-img-icon">
                                <img src={email} alt="NF Labs Email"/>
                                <h4>info@nflabs.io</h4>
                            </div>
                            <div className="contact-img-icon">
                                <img src={telephone} alt="NF Labs Telephone Number"/>
                                <h4>+65 8855 6655</h4>
                            </div>
                            <div className="contact-img-icon">
                                <img src={location} alt="NF Labs Location"/>
                                <h4>Kemp House, 152-160 City Road,
                                <br/>
                                London, UK EC IV 2NX</h4>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <Footer />
            </div>
        )
    } 
}


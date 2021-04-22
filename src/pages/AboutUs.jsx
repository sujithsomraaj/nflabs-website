import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default class About extends React.Component {
    render(){
        return(
            <div>
                <Navbar/>
                <div className="about-wrapper mg-top">
                <div className="container">
                    <h1 className="about-heading">About Us</h1>
                    <p className="about-desc">Adopting Blockchain ? Don’t lose your momentum. Keep up with the current trends of the market & establish esteemed products that are not mere clones of uniswap or other popular Dapps.</p>
                </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
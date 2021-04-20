import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default class Disclaimer extends React.Component {
    render(){
        return(
            <div>
                <Navbar />
                <div className="container">
                    <h1>
                    Terms and Conditions
                    </h1>
                    <p>
                    Updated as of Apr 18, 2021
                    </p>
                </div>
                <Footer />
            </div>
        )
    }
}

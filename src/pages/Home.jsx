import React from 'react'
import axios from "axios"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Lottie from 'react-lottie'
import animation1 from '../assets/lottie/header.json'
import animation2 from '../assets/lottie/section-one.json'
import animation3 from '../assets/lottie/flying-birds.json'

export default class Home extends React.Component{
    state= {
        EmailAddress: "",
    }

    onChangeHandle = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        axios.post("https://contact-nodeberry.herokuapp.com/contacts/nf_labs/subscribe", this.state)

        this.setState({
            EmailAddress: "",
        })
    }
    render(){
        const {EmailAddress} = this.state

        const defaultOptions1 = {
            loop: true,
            autoplay: true, 
            animationData: animation1,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
        };
        const defaultOptions2 = {
            loop: true,
            autoplay: true, 
            animationData: animation2,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
        };
        const defaultOptions3 = {
            loop: true,
            autoplay: true, 
            animationData: animation3,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
        };
        return(
            <div>
                <Navbar />
                <div className="jumbotron-wrapper">
                    <div className="jumbotron container">
                    <div>
                        <h1>Create, test, <span style={{color: "var(--orange)"}}>innovate, </span> repeat</h1>
                        <p>The future is here. We innovate immense solutions for the enhancement 
                        of blockchain & decentralized products.
                        </p>
                    </div>
                    <Lottie options={defaultOptions1} height={window.innerWidth <= 768 ? 300 : 400} width={window.innerWidth <= 768 ? 200 : 400} />
                    </div>
                </div>
                <div className="section-wrapper">
                <div className="section-1 container">
                    <Lottie options={defaultOptions2} height={200} />
                    <div>
                        <h2>
                            Turning The Impossible Possible
                        </h2>
                        <p>
                            Exploring how blockchain can innovate the unexplored industries of the globe.
                            Reshaping people's attitude towards uniqueness & behavioural approach. 
                            <span style={{color : "var(--orange)"}}> The technology is still rarely used for real-world applications. </span>
                            We're destined to create applications that can enhance the adoption of blockchain in various industries as a technology that can transform their exisiting business practices.
                        </p>
                    </div>
                </div>
                </div>
                <div className="section-wrapper-white">
                    <div className="section-two container">
                        <div className="section-two-logos">
                        <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png" alt="eth-logo" />
                        <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png" alt="ada-logo" />
                        <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png" alt="bsc-logo" />
                        <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png" alt="dot-logo" />
                        <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png" alt="solana-logo" />
                        </div>
                    </div>
                </div>
                <div className="section-wrapper">
                <div className="section-1 container">
                    <Lottie options={defaultOptions3} height={300} />
                    <div>
                        <h2>
                            Freedom is Our Mission
                        </h2>
                        <p>
                            We Create Products for Real-life use cases. We're connected to our users by experience & heart.
                            Actions speak more than words & hence our product will speak more about us. <br /> <br />
                            <span style={{color : "var(--orange)"}}> We touch and convert everything decentralized. We hate centralized ownership & censorship in all ways. </span>
                        </p>
                    </div>
                </div>
                </div>
                <div className="newsletter container">
                    <h2>
                        Get it first.
                    </h2>
                    <p>
                        Stay ahead of the curve and sign up for the latest news and updates from NF Labs.
                    </p>
                        <form onSubmit={this.submitHandler}>
                            <div>
                                <input 
                                type="email" 
                                name="EmailAddress" 
                                value={EmailAddress}
                                placeholder="Enter Your E-mail Address" 
                                onChange={this.onChangeHandle}
                                required
                                />
                                <button type="submit">
                                    Enroll Me In
                                </button>
                            </div>
                        </form>
                </div>
            <Footer />
            </div>
        )
    }
}
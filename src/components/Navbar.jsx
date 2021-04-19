import React from 'react'
import Lottie from 'react-lottie'
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { Drawer } from 'antd';
import NFlogo from "../assets/NF Labs Logo.svg"
import animation1 from '../assets/lottie/hamburger.json'

export default class Navbar extends React.Component{
    state={
        visible: false,
    }

showDrawer = () => {
    this.setState({
        visible: true,
    })
}

onClose = () => {
    this.setState({
        visible: false,
    })
}
    
    render(){
        const defaultOptions1 = {
            loop: true,
            autoplay: true, 
            animationData: animation1,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
        };
        return(             
            <div className="container">
            <div className="navbar-container">
              <div className="logo">
                  <img onClick={() => {window.location = "/"}} src={NFlogo} alt="NF labs logo"/>
              </div>
                <Drawer
                className="mobile-nav"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <div>
                        <button className="close--btn" onClick={this.onClose}>
                        <IoClose />
                        </button>
                    </div>
                    <ul>
                    <li className="mobile-navbar-items">Mission</li>
                    <li className="mobile-navbar-items" onClick = {()=>{window.location = "/products"}}>Products</li>
                    <li className="mobile-navbar-items">News</li>
                    <li className="mobile-navbar-items">Careers</li>
                    <li className="mobile-navbar-items">Learn</li>
                  </ul>
                    </Drawer>
                  <ul>
                    <li onClick={() => {window.location = "/#mission"}}>Mission</li>
                    <li onClick = {()=>{window.location = "/products"}}>Products</li>
                    <li>News</li>
                    <li>Careers</li>
                    <li>Learn</li>
                  </ul>
                  <div className="menu-button-container">
                    <button className="menu-button" type="primary" onClick={this.showDrawer}>
                        <BiMenu />
                    </button>
                    </div>
            </div>
            </div>
        )
    }
}
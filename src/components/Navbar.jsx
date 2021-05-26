import React from "react";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { Drawer } from "antd";
import NFlogo from "../assets/NF Labs Logo.svg";

export default class Navbar extends React.Component {
	state = {
		visible: false,
	};

	showDrawer = () => {
		this.setState({
			visible: true,
		});
	};

	onClose = () => {
		this.setState({
			visible: false,
		});
	};

	render() {
		return (
			<div className="container">
				<div className="navbar-container">
					<div className="logo">
						<img
							onClick={() => {
								window.location = "/";
							}}
							src={NFlogo}
							alt="NF labs logo"
						/>
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
							<li className="mobile-navbar-items">
								<a href="/about-us">About Us</a>
							</li>
							<li className="mobile-navbar-items">
								<a href="/products">Products</a>
							</li>
							<li className="mobile-navbar-items">
								<a href="##">News and Events</a>
							</li>
							<li className="mobile-navbar-items">
								<a href="/contact-us">Contact Us</a>
							</li>
						</ul>
					</Drawer>
					<ul>
						<li>
							<a href="/about-us">About Us</a>
						</li>
						<li>
							<a href="/products">Products</a>
						</li>
						<li>
							<a href="##">News and Events</a>
						</li>
						<li>
							<a href="/contact-us">Contact Us</a>
						</li>
					</ul>
					<div className="menu-button-container">
						<button className="menu-button" type="primary" onClick={this.showDrawer}>
							<BiMenu />
						</button>
					</div>
				</div>
			</div>
		);
	}
}

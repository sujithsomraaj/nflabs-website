import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import petcoinlogo from "../assets/PetCoin_logo.png";
export default class Products extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="products-wrapper">
					<div className="container">
						<h1>Our Products</h1>
						<p>We develop innovation, not just products that are clones.</p>
					</div>
					<div className="products container">
						<div className="product-card">
							<div className="product__img--container">
								<img src={petcoinlogo} alt="crypto-pets-shop-logo" />
							</div>
							<div className="product-desc">
								<h2>Crypto Pets Shop</h2>
								<p>
									Digital Platform for virtual ownership of pets. Users can upload their real-pets
									and tokenize them to distribute its ownership.
								</p>
								<p>
									Powered by Binance Smart Chain{" "}
									<span style={{ color: "var(--orange)" }}>(BEP 721)</span>
								</p>
								<button>Explore More</button>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

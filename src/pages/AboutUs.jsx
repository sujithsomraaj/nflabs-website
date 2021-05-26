import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slick from "../components/Slick";
import mainImg from "../assets/artwork_1.svg";
import artwork2 from "../assets/artwork_2.png";
import artwork3 from "../assets/artwork_3.svg";

export default class About extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<section className="container about-sec">
					<div className="main-content">
						<div className="about">
							<h1 className="about-heading">About Us</h1>
							<p className="about-desc">
								Adopting Blockchain ? Don’t lose your momentum. <br /> Keep up with the current
								trends of the market & establish esteemed products that are not mere clones of
								uniswap or other popular Dapps.
							</p>
						</div>
						<div className="approach">
							<h1 className="about-heading">Our Approach</h1>
							<p className="about-desc">
								We don’t reinvent the wheel. We discover a better & optimized way of using it. NF
								Labs research is heavily based on the optimal utilization of existing public
								blockchain to get more out of them.
								<br />
								<br />
								“We don’t make promises, but we deliver promises.“
							</p>
						</div>
					</div>
					<div className="main-img">
						<div className="main-img-container">
							<img src={mainImg} alt="Artwork" />
						</div>
					</div>
				</section>
				<section className="container about-sec2">
					<div className="transform">
						<div className="transform-img-container">
							<img src={artwork2} alt="Second Artwork" />
						</div>
						<h1 className="about-heading mg-top2">We Transform Industries</h1>
						<p className="about-desc">
							Everything that NF Labs Carter is unique and non-fungible. The name non-fungible
							doesn’t mean we’re doing just NFTs; we do everything that’s only unique out there in
							the market. Now the blockchain space is crowded by fungible projects that range from
							AMM to some yield farming.
						</p>
					</div>
					<div className="moveon">
						<div className="moveon-img-container">
							<img src={artwork3} alt="Third Artwork" />
						</div>
						<h1 className="about-heading mg-top2">Move On (Chain)</h1>
						<p className="about-desc">
							Decentralization of Art, Real Estate & Even Stocks are now a possibility on
							blockchain. But it can’t go far until it’s scalable. On-chain scalability is limited
							to the cost of resources, and we’re here to help everyone break those barriers and
							build everything on chain.
						</p>
					</div>
				</section>
				<section className="team">
					<h1 className="container about-heading">Our Team</h1>
					<p className="container team-desc">
						We’re here and we’ll be here with the same motive of improving the blockchain world for
						a better & efficient future.
					</p>
					<Slick />
				</section>
				<section className="container join">
					<h1>What Are You Waiting For ?</h1>
					<p>
						Want us to join your R & D Team ? You’re just one-step away from a resourceful
						collaboration.
					</p>
					<button className="join-btn">Join Now</button>
				</section>
				<Footer />
			</div>
		);
	}
}

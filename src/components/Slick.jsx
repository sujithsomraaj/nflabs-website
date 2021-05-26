import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLinkedin } from "react-icons/fa";
import photo4 from "../assets/photo4.png";
import prev from "../assets/left-circle.svg";
import next from "../assets/right-circle.svg";

const Slick = () => {
	function NextArrow(props) {
		const { className, style, onClick } = props;
		return (
			<img
				className={className}
				style={{ ...style, display: "block", width: "40px", height: "40px" }}
				onClick={onClick}
				src={next}
				alt="Left Arrow"
			/>
		);
	}

	function PrevArrow(props) {
		const { className, style, onClick } = props;
		return (
			<img
				className={className}
				style={{ ...style, display: "block", width: "40px", height: "40px" }}
				onClick={onClick}
				src={prev}
				alt="Left Arrow"
			/>
		);
	}

	var settings = {
		className: "slider",
		swipe: true,
		lazyLoad: "progressive",
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		initialSlide: 0,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 1072,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 836,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className="slider-box container">
			<Slider {...settings}>
				<div className="slider-items">
					<img
						src="https://nf-labs.s3.amazonaws.com/team-pics/desh.jpeg"
						alt="Deshaka Kandewatta"
					/>
					<h3>Deshaka Kandewatta</h3>
					<p>Co-founder & CPO</p>
					<div className="social-items">
						<a
							href="https://www.linkedin.com/in/deshaka-kandewatte/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedin />
						</a>
					</div>
				</div>
				<div className="slider-items">
					<img
						src="https://nf-labs.s3.amazonaws.com/team-pics/rasel.jpeg"
						alt="Md Asaduzzaman Rasel"
					/>
					<h3>Md Asaduzzaman Rasel</h3>
					<p>Co-Founder & Blockchain developer</p>
					<div className="social-items">
						<a
							href="https://www.linkedin.com/in/asadrasel/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedin />
						</a>
					</div>
				</div>
				<div className="slider-items">
					<img src="https://nf-labs.s3.amazonaws.com/team-pics/sujith.jpeg" alt="Sujith Somraaj" />
					<h3>Sujith Somraaj</h3>
					<p>CTO</p>
					<div className="social-items">
						<a
							href="https://www.linkedin.com/in/sujith-somraaj/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedin />
						</a>
					</div>
				</div>
				<div className="slider-items">
					<img src={photo4} alt="Loven" />
					<h3>Loven</h3>
					<p>Head of Design</p>
					<div className="social-items">
						<a href="!#" target="_blank" rel="noopener noreferrer">
							<FaLinkedin />
						</a>
					</div>
				</div>
			</Slider>
		</div>
	);
};

export default Slick;

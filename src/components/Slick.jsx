import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLinkedin } from "react-icons/fa";
import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo2.png";
import photo3 from "../assets/photo3.png";
import photo4 from "../assets/photo4.png";
import prev from "../assets/left-circle.svg";
import next from "../assets/right-circle.svg";

const Slick = () => {


    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
        
          <img 
            className={className}
            style={{ ...style, display: "block", width: "40px", height: "40px" }}
            onClick={onClick} 
            src={next} alt="Left Arrow"/>
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <img 
            className={className}
            style={{ ...style, display: "block", width: "40px", height: "40px"}}
            onClick={onClick}
           src={prev} alt="Left Arrow"/>
        );
      }

    var settings = {
        className: "slider",
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      };
    return (
        <div className="slider-box container">
        <Slider {...settings}>
          <div className="slider-items">
              <img src={photo1} alt="Joe Russo"/>
                <h3>Joe Russo</h3>
                <p>Co-Founder</p>
                <div className="social-items"><a href="!#" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                </div>
          </div>
          <div className="slider-items">
            <img src={photo2} alt="Karen Gillan"/>
            <h3>Karen Gillan</h3>
            <p>Chief Project Manager</p>
            <div className="social-items"><a href="!#" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
            </div>
          </div>
          <div className="slider-items">
          <img src={photo3} alt="Kevin Fiege"/>
            <h3>Kevin Fiege</h3>
            <p>Head of Design</p>
            <div className="social-items"><a href="!#" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
            </div>
          </div>
          <div className="slider-items">
          <img src={photo4} alt="Anthony Mackie"/>
            <h3>Anthony Mackie</h3>
            <p>Blockchain Developer</p>
            <div className="social-items"><a href="!#" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
            </div>
          </div>
          <div className="slider-items">
          <img src={photo1} alt="Joe Russo"/>
            <h3>Joe Russo</h3>
            <p>Co-Founder</p>
            <div className="social-items"><a href="!#" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
            </div>
          </div>
          <div className="slider-items">
          <img src={photo2} alt="Karen Gillan"/>
            <h3>Karen Gillan</h3>
            <p>Chief Project Manager</p>
            <div className="social-items"><a href="!#" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
            </div>
          </div>
          <div className="slider-items">
          <img src={photo3} alt="Kevin Fiege"/>
            <h3>Kevin Fiege</h3>
            <p>Head of Design</p>
            <div className="social-items"><a href="!#" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
            </div>
          </div>
          <div className="slider-items">
          <img src={photo4} alt="Anthony Mackie"/>
            <h3>Anthony Mackie</h3>
            <p>Blockchain Developer</p>
            <div className="social-items"><a href="!#" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
            </div>
          </div>
        </Slider>
      </div>
    )
}

export default Slick

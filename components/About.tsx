import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
const About = () => {
  return (
    <>
      <div className="container-About">
        <div className="About-img">
          <img src="https://sidzifi.com/assets/about-1-7d400b06.jpg" alt="" />
        </div>
        <div className="About-text-img">
          <div className="roun2img">
            <p> About Us</p>
          </div>
          <h2>Our Innovation on the Internet started from 2021</h2>
          <h4>Professional Apps and web development agency to solutions.</h4>
          <p className="About-paragraph">
            We strive to make apps and websites user-friendly for people of all
            ages and backgrounds, making it easier for them to connect,
            communicate, and share information. Our ultimate goal is to empower
            every individual with the ability to leverage the power of the
            internet in their daily lives, thus creating a more connected and
            inclusive world.
          </p>
          <div className="list-group">
            <div className="main-icon-text">
              <div className="icons-tick">
                <AiOutlineCheck />
              </div>
              <div className="icon-text">
                <a href="">Web & App Development</a>
              </div>
            </div>
            <div className="main-icon-text">
              <div className="icons-tick">
                <AiOutlineCheck />
              </div>
              <div className="icon-text">
                <a href="">Professional E-commerce Solutions</a>
              </div>
            </div>
            <div className="main-icon-text">
              <div className="icons-tick">
                <AiOutlineCheck />
              </div>
              <div className="icon-text">
                <a href="">Influencer's Portfolio</a>
              </div>
            </div>
          </div>
          <div className="outline-btn">
            Let's Connect
            <span>
              <AiOutlineArrowRight />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

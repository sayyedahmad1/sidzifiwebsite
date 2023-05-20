import { AiFillLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="container-footer">
        <div className="footer-icons-main">
          <h4>Follow</h4>
          <div className="insta-icon-group">
            <span className="instagram-icon">
              <AiFillLinkedin />
            </span>
            {/* <a href="https://www.linkedin.com/company/sidzifi/">Linkedin</a> */}
            <a href="">Linkedin</a>
          </div>
          <div className="insta-icon-group">
            <span className="instagram-icon">
              <BsInstagram />
            </span>
            <a href="">
              {/* <a href="https://instagram.com/sidzifi?igshid=ZDdkNTZiNTM="> */}
              Instagram
            </a>
          </div>
        </div>
        <div className="copyright">
          <p>All Right Reservered to Sidzifi</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

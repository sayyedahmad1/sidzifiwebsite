import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

const Project = () => {
  return (
    <>
      <div className="container-Project">
        <div className="Project-text">
          <h2>
            Have Any on <span className="fill"> Project</span> Mind!
            <span className="fill"> Contact</span>Us
          </h2>
          <p>
            Do you have any particular web development or app project in mind
            that you would like to discuss? I'm always here to help and
            brainstorm ideas with you. Let's explore your options and see how we
            can make your project a reality. Just let me know what you have in
            mind and we'll take it from there.
          </p>
          <div className="email-phone-main">
            <div className="icon-text-email-name">
              <div className="email-icon">
                <div className="icon-email">
                  <AiOutlineMail />
                </div>
                <a href="">Email Us</a>
              </div>
              <a
                href="mailto:sayyedahmad5252@gmail.com"
                className="email-content"
              >
                sayyedahmad5252@gmail.com
              </a>
            </div>
            <div className="icon-text-email-name">
              <div className="email-icon">
                <div className="icon-email">
                  <AiOutlinePhone />
                </div>
                <a href="">Phone Us</a>
              </div>
              <a href="tel:+8795743311" className="email-content">
                +8795743311
              </a>
            </div>
          </div>
        </div>
        <div className="image-projact">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Project;

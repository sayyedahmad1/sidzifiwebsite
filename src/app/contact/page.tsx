// import Hero from "../../../components/Hero";
import { AiOutlineRight } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import { AiOutlinePhone } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";
import Whatsaap from "../../../components/Whatsaap";

export default function page() {
  return (
    <>
      <div className="hero-container-contact">
        <div className="dottedimg">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
        <div className="containt-text1">
          <h1 className="about-heading">Contact Us</h1>
          <a href="" className="home-group">
            Home
            <span className="left-iconleft">
              <AiOutlineRight />
            </span>
            <span className="linkabout">Contact Us</span>
          </a>
        </div>
        <div className="contact-img-group-hero">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAVUlEQVQokWOMDHvJgAVMYGBgyIcKT2RgYChAV8KETRcxYAhpZIEGBDqwR+LbY1MDCtX/dA0cFmg8YXOqAZR9gYGB4SA2jRiRC/UTTCNI08hLAAwMDABc4wzgy1527AAAAABJRU5ErkJggg=="
            alt=""
          />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAABFUlEQVQokY2SsUoDQRRFj8N2gpBKe4tAEIR0foLYWbjYuY1fYZn/iG0au5DK2i5gI1j4AakCgl0KOfIeTJF1c5vZue/eN2927tH93YYKDdABLTAFRsAWWAMLYA7sUl6bJ8ALMKYfn8At8KGiVMa3MH7F6Wc2j7ULfhy6SZqbOPEEWAKXwDOQI21iL78MnfqmRNc80bv+9Awt31YTdCUIMfvHWDeYxXdb4q+K1YAxkbppieeguuMQUjcq8Y7i9EBz6rYlAiCuDzSnbl0iOeIJOB4wWlcnFpqNnMk5j0Z9DeStq1M/12xWjdw3cAO8Aw/V3Vzdy1tXp35nuoRZvaqy7TT7sDfb2eACeAReq1dwdS9v/c8I8AuecEDY9MMmTwAAAABJRU5ErkJggg=="
            alt=""
          />
        </div>
      </div>
      {/* Get In Touch */}
      <div className="container-contact2">
        <div className="roundig-contact-img">
          <p>Get In Touch</p>
        </div>
        <h2>
          Have Any Project on <br /> Mind? Work Together
        </h2>
      </div>
      <Whatsaap />
      {/* contact-map=sction */}
      <div className="contaact-container2">
        <div className="card-contact-main">
          <div className="card-group-main">
            <div className="card-map">
              <div className="map-icon">
                <BiMap />
              </div>
              <h4>Locations</h4>
              <p>
                505 Main Street, 2nd Block,
                <br /> New York
              </p>
            </div>
            <div className="card-map">
              <div className="map-icon">
                <TfiEmail />
              </div>
              <h4>Locations</h4>
              <p>
                505 Main Street, 2nd Block,
                <br /> New York
              </p>
            </div>
          </div>
          <div className="card-group-main">
            <div className="card-map">
              <div className="map-icon">
                <AiOutlinePhone />
              </div>
              <h4>Locations</h4>
              <p>
                505 Main Street, 2nd Block,
                <br /> New York
              </p>
            </div>
            <div className="card-map">
              <div className="map-icon">
                <MdOutlineWatchLater />
              </div>
              <h4>Locations</h4>
              <p>
                505 Main Street, 2nd Block,
                <br /> New York
              </p>
            </div>
          </div>
        </div>
        <div className="map-company">
          <div className="map-retio">
            <div
              id="embed-map-display"
              style={{ height: "100%", width: "100%" }}
            >
              <iframe
                style={{ height: "100%", width: "100%", border: "0" }}
                frameBorder="0"
                src="https://www.google.com/maps/embed/v1/place?q=hyat+masjid+thakurganj+lucknow&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              ></iframe>
            </div>
            <a
              className="embed-map-html"
              href="https://www.bootstrapskins.com/themes"
              id="enable-maps-data"
            >
              premium bootstrap themes
            </a>
            <style>{`#embed-map-display img.text-marker { max-width: none !important; background: none !important; } img { max-width: none; }`}</style>
          </div>
        </div>
      </div>
      {/* Message Us-section */}
      <div className="contact-sms">
        <div className="sms-heading-img">
          <p>Message Us</p>
        </div>
        <h2>
          Get Any Consultations ?<br /> Contact With Us
        </h2>
      </div>
      {/* input=section */}
      <div className="input-container">
        <form action="" className="inout-parent">
          <input type="text" className="email" placeholder="Full Name" />
          <input type="email" className="email" placeholder="Email Address" />
          <input type="text" className="email" placeholder="Phone Number" />
        </form>
        <div className="textarea-container">
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            className="optional1"
            placeholder="Write Message"
          ></textarea>
        </div>
        <div className="btn-contact-sms">
          <button className="btnsms">Send Us Message</button>
        </div>
      </div>
    </>
  );
}

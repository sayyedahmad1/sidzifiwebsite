import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Whatsaap from "../../components/Whatsaap";
import Leatest from "../../components/Leatest";
import About from "../../components/About";
import Services from "../../components/Services";
import Agency from "../../components/Agency";
import Project from "../../components/Project";
import Internet from "../../components/Internet";
import Heroabout from "../../components/Heroabout";

export default function Home() {
  return (
    <>
      <header className="header-container">
        <Navbar />
      </header>
      <div className="container">
        {/* Hero-container */}
        <Hero />
      </div>
      {/* whatsaap-section */}
      <Whatsaap />
      {/* ====About=section====== */}
      <Leatest />

      {/* Leatest-section */}
      <About />
      {/* services-section/ */}
      <Services />
      {/* ====Agency Statistics=section===== */}
      <Agency />
      {/* Project-section */}
      <Project />
      {/* Internet-section */}
      <Internet />
      <Footer />
    </>
  );
}

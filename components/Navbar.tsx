// import { RiArrowDropDownLine } from "react-icons/ri";
// import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="navbar-section">
        <a href="" className="logo">
          sidzifi
        </a>
        <ul className="menu-list">
          <li className="aboumt">
            <a href="/">Home</a>
          </li>
          <li className="aboumt">
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/blog"> Blog</a>
          </li>
          <li>
            <a href="/contact"> Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

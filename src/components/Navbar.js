// Dependencies, Libraries and Components
import { IoLogoFlickr } from "react-icons/io";
import { FaSearch, FaAngleDown } from "react-icons/fa";

// Compnent function for Navbar
const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo and Page name */}
      <div className="logo">
        <IoLogoFlickr />
        <h1>Avataar</h1>
      </div>

      {/* Navbar items and More section items */}
      <ul>
        <li className="item-on-nav">
          <a href="#">Home</a>
        </li>
        <li className="item-on-nav">
          <a href="#">Electronics</a>
        </li>
        <li className="item-on-nav">
          <a href="#">Books</a>
        </li>
        <li className="item-on-nav">
          <a href="#">Music</a>
        </li>
        <li className="item-on-nav">
          <a href="#">Movies</a>
        </li>
        <li className="item-on-nav">
          <a href="#">Clothing</a>
        </li>
        <li className="item-on-nav">
          <a href="#">Games</a>
        </li>

        {/* DropDown with Dynamic viewport responiveness, Hides according to viewport height*/}
        <li className="dropdown">
          <div className="dropbtn">
            <span>More</span> <FaAngleDown />
          </div>
          <div className="dropdown-content">
            <a href="#" className="item-on-dropdown">
              Home
            </a>
            <a href="#" className="item-on-dropdown">
              Electronics
            </a>
            <a href="#" className="item-on-dropdown">
              Books
            </a>
            <a href="#" className="item-on-dropdown">
              Music
            </a>
            <a href="#" className="item-on-dropdown">
              Movies
            </a>
            <a href="#" className="item-on-dropdown">
              Clothing
            </a>
            <a href="#" className="item-on-dropdown">
              Games
            </a>

            {/* Fixed here on in More only*/}
            <a href="#">Furniture</a>
            <a href="#">Travel</a>
            <a href="#">Clothing</a>
            <a href="#">Botanical</a>
          </div>
        </li>
      </ul>

      {/* Serach Bar and Input Box which disappers in small screens and appers on click */}
      <div className="search">
        <FaSearch style={{ transform: "translateY(8px)" }} />
        <input id="input-bar" type="text" placeholder="Search Something" />
      </div>
    </nav>
  );
};

export default Navbar;

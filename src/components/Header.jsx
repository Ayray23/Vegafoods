import { useState } from "react";
import { IoMdCart, IoMdMenu, IoMdClose } from "react-icons/io";
import { FaPhone, FaLocationArrow } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <div className="bg-green-600 px-4 py-3 text-sm text-white flex flex-col items-center justify-between gap-2 md:flex-row md:px-8">
        <span className="flex items-center gap-2"><FaPhone /> + 1235 2355 98</span>
        <span className="flex items-center gap-2"><FaLocationArrow /> youremail@email.com</span>
        <span>3-5 Business days delivery &amp; Free Returns</span>
      </div>
      <nav className="relative z-40 flex items-center justify-between bg-white px-4 py-4 shadow-sm md:px-8">
        <Link to="/" onClick={closeMenu} className="text-2xl font-extrabold tracking-tight text-green-700">Vegefoods<span className="text-yellow-500">.</span></Link>
        <button type="button" className="text-3xl text-green-700 md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>
          {menuOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
        <ul className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-5 bg-white px-6 py-5 text-base font-semibold text-gray-700 shadow-lg md:static md:flex md:flex-row md:items-center md:gap-8 md:bg-transparent md:p-0 md:shadow-none`}>
          <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/Shop" onClick={closeMenu}>Shop</NavLink></li>
          <li><NavLink to="/Aboutus" onClick={closeMenu}>About</NavLink></li>
          <li><NavLink to="/Contact" onClick={closeMenu}>Contact</NavLink></li>
          <li><Link to="/Login" onClick={closeMenu} className="flex items-center gap-2"><IoMdCart /> Cart <span className="text-xs text-gray-500">(0)</span></Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

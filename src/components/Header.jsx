import { IoMdCart, IoMdMenu, IoMdClose } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div>
      <div className="bg-green-600 text-white flex md:flex-row justify-evenly flex-col p-4">
        <h2 className="flex gap-2 items-center">
          <FaPhone/>
        + 1235 2355 98
        </h2>
        <h2 className="flex gap-2 items-center">
        <FaLocationArrow />
        youremail@email.com
        </h2>
        <h2>
        3-5 Business days delivery & Free Returns
        </h2>
      </div>

      <nav className="relative flex justify-between items-center text-xl p-4 md:p-6">
        <Link to ='/'>
        <h1 className="text-green-600 text-2xl "> Vegefoods</h1>
        </Link>
       
        <button className="md:hidden text-2xl text-green-700 order-first" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <IoMdClose /> : <IoMdMenu />}</button>
        <ul className={`${menuOpen ? "flex" : "hidden"} md:flex absolute md:static top-full left-0 right-0 bg-white md:bg-transparent flex-col md:flex-row gap-4 p-5 md:p-0 mr-0 md:mr-8 text-green-700 shadow md:shadow-none z-50`}
          <NavLink to='/' onClick={() => setMenuOpen(false)}>
          <li>Home</li>
          </NavLink>

          <NavLink to='/Shop' onClick={() => setMenuOpen(false)}>
          <li> Shop</li>
          </NavLink>
          <NavLink to='/Aboutus' onClick={() => setMenuOpen(false)}>
            <li>About</li>
          </NavLink>
          <NavLink to='/Blog' onClick={() => setMenuOpen(false)}>
          <li>Blog</li>
          </NavLink>

          <div className="flex ml-4 items-center ">
          <IoMdCart/>
          [0]
          </div>
        </ul>
      </nav>
    </div>
  )
}

export default Header
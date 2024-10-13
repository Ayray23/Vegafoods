import { IoMdCart } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
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

      <nav className="flex justify-between items-center text-xl p-6">
        <Link to ='/'>
        <h1 className="text-green-600 text-2xl "> Vegefoods</h1>
        </Link>
       
        <ul className="flex gap-4 mr-8 text-green-700">
          <NavLink to='/' >
          <li>Home</li>
          </NavLink>

          <NavLink to='/Shop' >
          <li> Shop</li>
          </NavLink>
          <NavLink to='/Aboutus'>
            <li>About</li>
          </NavLink>
          <NavLink>
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
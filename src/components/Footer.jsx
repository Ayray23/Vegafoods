import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="bg-green-600 text-white">
      <div className='grid-cols-2  grid md:grid-cols-4 ml-8 mt-8 h-96 items-center justify-center'>
        <div >
          <h2 className='pb-4  text-2xl '>Vegefood</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        </div>
        <div className="flex pl-8 flex-col"> 
          <h2 className=' text-2xl pb-4'>Menu</h2>
          <ul className='cursor-pointer  gap-2'>
            <li>Shop</li>
            <li>About </li>
            <li> Journal</li>
            <li>Contact us</li>
         
          </ul>
        </div>
        <div className="flex pl-8 flex-col">
          <h2 className=' text-2xl pb-4'>Help</h2>
          <ul className='cursor-pointer  gap-2'>
            <li>Shop</li>
            <li>About </li>
            <li> Journal</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="flex flex-col pr-8">
          <h2 className=' text-2xl pb-4'>Have a question</h2>
          <ul className='cursor-pointer gap-2'>
            <li className="flex items-start gap-1">
            <FaLocationDot className="mt-1" />
              203 Fake St. Mountain View, San Francisco, California, USA</li>
            <li className="flex gap-1 pt-2 items-center">
              <FaPhone />
              +224490569584
            </li>
            <li className='flex gap-3 pt-2 items-center'>
              <TfiEmail className=" font-bold" />
               Email.com
            </li>
           </ul> 
        </div>
        <div className="flex gap-4 text-2xl">
        <FaTwitter />
        <FaFacebookF />
        <FaInstagram />
        </div>
      </div>
    </div>
  )
}

export default Footer
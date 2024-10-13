import { Link, NavLink } from "react-router-dom";
import heroImage from '../assets/fruits.jpg';
import fruit from '../assets/strawberry (1).jpg';
import fruit2 from '../assets/fruits.jpg';
import Shop from '../pages/Shop';
import { FaMicrosoft } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { FaJava } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      {/* Background image */}
       <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-light mb-4">
          We serve Fresh Vegetables & Fruits
        </h1>
        <p className="text-lg mb-8">
          We deliver organic vegetables & fruits
        </p>
        <Link to='Shop' >
        <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full">
          View Details
        </button>
        </Link>
      </div>
    </section>
    {/* shipping */}
    <div>
        <div className='flex-col items-center flex md:flex-row justify-around m-8'>
            <div className='items-center text-center'>
            <img src={fruit} alt="Description" className='w-40 h-40 m-4 rounded-full' />
            <h2 className=' text-center text-xl pb-4 pt-2'>FREE SHIPPING</h2>
            <p className='text-gray-400'>ON ORDER OVER $100</p>
            </div>
            <div className='items-center text-center'>
            <img src={fruit} alt="Description" className='w-40 h-40 m-4 rounded-full' />
            <h2 className=' text-center text-xl pb-4 pt-2'>ALWAYS FRESH</h2>
            <p className='text-gray-400'>PRODUCT WELL PACKAGE</p>
            </div>
            <div className='items-center text-center'>
            <img src={fruit} alt="Description" className='w-40 h-40 m-4 rounded-full' />
            <h2 className=' text-center text-xl pb-4 pt-2'>Superior Quality</h2>
            <p className='text-gray-400'>Quality Products</p>
            </div>
            <div className='items-center text-center'>
            <img src={fruit} alt="Description" className='w-40 h-40 m-4 rounded-full' />
            <h2 className=' text-center text-xl pb-4 pt-2'>Support</h2>
            <p className='text-gray-400'>24/7 Support</p>
            </div>
            </div>
    </div>  
{/*Vegitable section  */}
    <div>

    <div className="flex  ">

<div className="text-center block md:hidden ">
  <h2 className=" text-2xl font-semibold text-green-600 mt-12">Vegetables</h2>
  <p className="text-gray-500 mt-2">Protect the health of every home</p>
  <Link to='Shop' >
  <button className="bg-green-500 mb-2 md:mb-0 text-white px-4 py-2 mt-4 rounded-lg">Shop now</button>
  </Link>
  <img src={fruit2} alt="Description" className='md:mt-28 pb- rounded-lg' />
</div>
</div>
    <div className="grid md:grid-cols-3 gap-6 mt-8 pb-8 ml-8">
      <div className='flex flex-col gap-8 mt-16'>
      <div className="relative bg-white shadow rounded-lg overflow-hidden">
      <img src={fruit} alt="Description" />
      <div className="absolute top-48 left-0 bg-green-500 text-white p-3 rounded">Fruits</div>
      </div>
      <div className="relative bg-white shadow rounded-lg overflow-hidden">
      <img src={fruit} alt="Description" />
        <div className="absolute top-48 left-0 bg-green-500 text-white p-3 rounded">Fruits</div>
      </div>


      </div>
      
      <div className="flex  ">

      <div className="text-center hidden md:block ">

        <h2 className="text-2xl font-semibold text-green-600 mt-12">Vegetables</h2>
        <p className="text-gray-500 mt-2">Protect the health of every home</p>
        <Link to='Shop' >
         <button className="bg-green-500 mb-2 md:mb-0 text-white px-4 py-2 mt-4 rounded-lg">Shop now</button>
        </Link>
        <img src={fruit2} alt="Description" className='mt-28 pb- rounded-lg' />
      </div>
    </div>
    <div className='flex flex-col gap-8 mt-16'>
      <div className="relative bg-white shadow rounded-lg overflow-hidden">
      <img src={fruit} alt="Description" />
      <div className="absolute top-48 left-0 bg-green-500 text-white p-3 rounded">Fruits</div>
      </div>
      <div className="relative bg-white shadow rounded-lg overflow-hidden">
      <img src={fruit} alt="Description" />
      <div className="absolute top-48 left-0 bg-green-500 text-white p-3 rounded">Fruits</div>
      </div>


      </div>
      


    </div>

  </div>
    {/* Featured product */}
  <div>
        <div className=''>
            <div className="flex flex-col justify-center items-center">
            <h4 className='text-green-500 mt-8'>Featured Products</h4>
            <h1 className='font-bold text-3xl pt-4 pb-6'>Our Products</h1>
            <p className='text-gray-600 font-light mb-8'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>

            </div>
        </div>
        <div>

        </div>
          <div className='md:grid md:grid-cols-4 md:gap-4 ml-8 mb-8'>
              <div className="relative  border-2  m-16 md:m-2 bg-white shadow rounded-lg overflow-hidden">
                <img src={fruit} alt="Description" />
                <h3 className="absolute top-0 left-0 md:left-0 md:top- bg-green-500 text-white px-3 py-1">
                  30%
                </h3>
                <div  className='text-center'>
                  <h2 className='my-4'>
                    Fruits
                  </h2>
                  <h4 className='pb-6 '>
                    $120.00 
                    <span className='text-green-700 pl-4'>$80.00</span> 
                  </h4>
                </div>
              </div>
              <div className="relative  border-2  m-16 md:m-2 bg-white shadow rounded-lg overflow-hidden">
                <img src={fruit} alt="Description" />
                <h3 className="absolute top-0 left-0 md:left-0 md:top- bg-green-500 text-white px-3 py-1">
                  30%
                </h3>
                <div  className='text-center'>
                  <h2 className='my-4'>
                    Fruits
                  </h2>
                  <h4 className='pb-6 '>
                    $120.00 
                    <span className='text-green-700 pl-4'>$80.00</span> 
                  </h4>
                </div>
              </div>
              <div className="relative  border-2  m-16 md:m-2 bg-white shadow rounded-lg overflow-hidden">
                <img src={fruit} alt="Description" />
                <h3 className="absolute top-0 left-0 md:left-0 md:top- bg-green-500 text-white px-3 py-1">
                  30%
                </h3>
                <div  className='text-center'>
                  <h2 className='my-4'>
                    Fruits
                  </h2>
                  <h4 className='pb-6 '>
                    $120.00 
                    <span className='text-green-700 pl-4'>$80.00</span> 
                  </h4>
                </div>
              </div>
              <div className="relative  border-2  m-16 md:m-2 bg-white shadow rounded-lg overflow-hidden">
                <img src={fruit} alt="Description" />
                <h3 className="absolute top-0 left-0 md:left-0 md:top- bg-green-500 text-white px-3 py-1">
                  30%
                </h3>
                <div  className='text-center'>
                  <h2 className='my-4'>
                    Fruits
                  </h2>
                  <h4 className='pb-6 '>
                    $120.00 
                    <span className='text-green-700 pl-4'>$80.00</span> 
                  </h4>
                </div>
              </div>
              <div className="relative  border-2  m-16 md:m-2 bg-white shadow rounded-lg overflow-hidden">
                <img src={fruit} alt="Description" />
                <h3 className="absolute top-0 left-0 md:left-0 md:top- bg-green-500 text-white px-3 py-1">
                  30%
                </h3>
                <div  className='text-center'>
                  <h2 className='my-4'>
                    Fruits
                  </h2>
                  <h4 className='pb-6 '>
                    $120.00 
                    <span className='text-green-700 pl-4'>$80.00</span> 
                  </h4>
                </div>
              </div>
              <div className="relative  border-2  m-16 md:m-2 bg-white shadow rounded-lg overflow-hidden">
                <img src={fruit} alt="Description" />
                <h3 className="absolute top-0 left-0 md:left-0 md:top- bg-green-500 text-white px-3 py-1">
                  30%
                </h3>
                <div  className='text-center'>
                  <h2 className='my-4'>
                    Fruits
                  </h2>
                  <h4 className='pb-6 '>
                    $120.00 
                    <span className='text-green-700 pl-4'>$80.00</span> 
                  </h4>
                </div>
              </div>
              <div className="relative  border-2  m-16 md:m-2 bg-white shadow rounded-lg overflow-hidden">
                <img src={fruit} alt="Description" />
                <h3 className="absolute top-0 left-0 md:left-0 md:top- bg-green-500 text-white px-3 py-1">
                  30%
                </h3>
                <div  className='text-center'>
                  <h2 className='my-4'>
                    Fruits
                  </h2>
                  <h4 className='pb-6 '>
                    $120.00 
                    <span className='text-green-700 pl-4'>$80.00</span> 
                  </h4>
                </div>
              </div>
              <div className="relative  border-2  m-16 md:m-2 bg-white shadow rounded-lg overflow-hidden">
                <img src={fruit} alt="Description" />
                <h3 className="absolute top-0 left-0 md:left-0 md:top- bg-green-500 text-white px-3 py-1">
                  30%
                </h3>
                <div  className='text-center'>
                  <h2 className='my-4'>
                    Fruits
                  </h2>
                  <h4 className='pb-6 '>
                    $120.00 
                    <span className='text-green-700 pl-4'>$80.00</span> 
                  </h4>
                </div>
              </div>
              
          </div>  
    </div>

    <div>
        <div className='flex justify-center bg-orange-200 h-[300px] md:h-[550px]'>
            <div className='w-[1/2] mr-8 hidden md:block '> 
            <img src={fruit2} alt="Description" className='h-[550px] w-[900px]' />
            </div>
            <div className='flex flex-col w-[1/2] justify-center '>
                <h4 className='text-green-500 '>Best price for you</h4>
                <h1 className='font-bold py-4 text-3xl'>Deal of the day</h1>
                <p className='text-gray-500 font-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, inventore.</p>
                <h3 className='text-green-500 py-4 font-serif'>Spinach</h3>
                <h4 className='font-light mb-6'>$10 <span className='text-green-500'>now $5 only</span></h4>
            </div>
        </div>
    </div>

    <div>
        <div className='flex flex-col justify-center items-center '>
            <h4 className='text-green-500 pb-8 pt-4 text-xl'>Testimony</h4>
            <h1 className='text-3xl font-bold py-4'>Our satisfied customer says
            </h1>
            <p className='text-gray-500 font-light'> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
        </div>
        <div className='flex justify-around items-center mx-8 mt-4 gap-4'>
            <div className='flex flex-col items-center  '>
            <img src={fruit} alt="Description" className='w-40 items-center h-40 m-4 rounded-full' />
                <p className='pt-8 pb-6 text-gray-400 font-light'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
                <h2 className='text-1xl py-4 justify-center'>Garreth smith</h2>
                <h6 className='text-0.5xl py-4 justify-center'>SYSTEM ANALYST</h6>
            </div>
            <div className='flex flex-col items-center hidden md:block'>
            <img src={fruit2} alt="Description" className='w-40 h-40 m-4 rounded-full' />
                <p className='pt-8 pb-6 text-gray-400 font-light'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
                <h2 className='text-1xl py-4 justify-center'>Garreth smith</h2>
                <h6 className='text-0.5xl py-4 justify-center'>SYSTEM ANALYST</h6>
            </div>
            <div className='flex flex-col items-center hidden md:block'>
            <img src={fruit} alt="Description" className='w-40 h-40 m-4 rounded-full' />
                <p className='pt-8 pb-6 text-gray-400 font-light'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
                <h2 className='text-1xl py-4 justify-center'>Garreth smith</h2>
                <h6 className='text-0.5xl py-4 justify-center'>SYSTEM ANALYST</h6>
            </div>
            
        </div>
          
    </div>

    <div >
        <div className="flex justify-around h-40 border-t-2 border-black">
          <ul className='grid md:grid-cols-5 grid-cols-3 gap-12 items-center '>
            <li className="flex gap-2 items-center text-3xl">
            <FaMicrosoft className="" />
              Microsoft</li>
            <li className="flex items-center gap-2 text-4xl"> 
            <IoLogoAndroid className="" />
              Apple</li>
            <li className="text-3xl flex gap-2 items-center">
            <FaSkype />
              Skype
            </li>
            <li className="flex items-center gap-2 text-3xl">
            <FaJava />
              Java
            </li>
            <li className="flex items-center text-3xl">
              <FaGoogle />
              oogle
            </li>
          </ul>
        </div>
    </div>

    <div>
        <div className='grid-cols-1 grid md:grid-cols-2 items-center px-8 py-4 bg-slate-400 mt-4'>
            <div className='justify-center '>
                <h2 className='text-2xl mb-2 '>Subcribe to our Newsletter</h2>
                <p className=''>Get e-mail updates about our latest shops and special offers</p>
            </div>
            <div className="pt-4 md:pt-0">
                <input type="text" className="bg-black text-white py-4 px-8 h-"placeholder="search" />
                <button className='bg-green-600 text-white py-4 px-8'>Subscribe</button>
            </div>
        </div>
    </div>












    </div>
  )
}

export default Home
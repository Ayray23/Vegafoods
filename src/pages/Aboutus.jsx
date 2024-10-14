import heroImage from '../assets/fruits.jpg'; 
import fruit from '../assets/strawberry (1).jpg'
import fruit2 from '../assets/fruits.jpg'

const Aboutus = () => {
  return (
    <div>
 <section
      className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white">
        <h3 className='text-1xl font-light'>HOME ABOUT US</h3>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About us    
        </h1>
        </div>
    </section>
    
    <section className='flex-col flex md:flex-row md:mx-32'>
          <div>
          <img src={fruit} alt="Description" className='w-[600px] md:h-[500px] md:pr-8 mt-1 md:m-0 ' />
          </div>
          <div className='m-4 md:m-0 md:w-1/2 md:pt-24  '>
            <h1 className='text-3xl font-bold'>Welcome to Vegefoods an eCommerce website</h1>
            <p className='text-gray-600 mt-4'>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p>
            <p className='text-gray-600 mt-2'>
            But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.
            </p>
            <button className='bg-green-600 p-2 mt-4 rounded-full text-white '>
              Shop now
            </button>
          </div>
    </section>


    <div>
        <div className='grid md:grid-cols-2 items-center ml-4  py-4 md:ml-32  my-6'>
            <div className='justify-center '>
                <h2 className='text-2xl mb-2 '>Subcribe to our Newsletter</h2>
                <p className=''>Get e-mail updates about our latest shops and special offers</p>
            </div>
            <div className="mt-4 md:m-0">
                <input type="text" className="bg-black text-white py-4 px-8 h-"placeholder="search" />
                <button className='bg-green-600 text-white py-4 px-8'>Subscribe</button>
            </div>
        </div>
    </div>

 <section
      className="relative bg-cover bg-center h-[600px] flex  items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 flex bg-black opacity-50"></div>
      <div className="flex-col relative md:flex-row z-10 md:z-0 text-center flex items-center md:gap-8 text-white">
       <div className='my-4'>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
          10,000    
          </h1>
          <h3>HAPPY CUSTOMERS</h3>
        </div>
       <div className='my-4'>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
          100    
          </h1>
          <h3>BRANCHES</h3>
        </div>
       <div className='my-4'>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
          1,000    
          </h1>
          <h3>PARTNER</h3>
        </div>
       <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
          100    
          </h1>
          <h3>AWARDS</h3>
        </div>
        
        </div>
    </section>
    <div>
        <div className='flex flex-col justify-center items-center'>
            <h4 className='text-green-500 pb-8 pt-4 text-xl'>Testimony</h4>
            <h1 className='text-3xl font-bold py-4'>Our satisfied customer says
            </h1>
            <p className='text-gray-500 font-light'> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
        </div>
        <div className='flex justify-around items-center mx-8 mt-4 gap-4'>
            <div className='flex flex-col items-center  '>
            <img src={fruit} alt="Description" className='w-40 h-40 m-4 rounded-full' />
                <p className='pt-8 pb-6 text-gray-400 font-light'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
                <h2 className='text-1xl py-2 justify-center'>Garreth smith</h2>
                <h6 className='text-0.5xl py-2 justify-center'>SYSTEM ANALYST</h6>
            </div>
            <div className='items-center hidden md:block'>
            <img src={fruit2} alt="Description" className='w-40 h-40 m-4 rounded-full' />
                <p className='pt-8 pb-6 text-gray-400 font-light'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
                <h2 className='text-1xl py-2 justify-center'>Garreth smith</h2>
                <h6 className='text-0.5xl py-2 justify-center'>SYSTEM ANALYST</h6>
            </div>
            <div className='items-center hidden md:block'>
            <img src={fruit} alt="Description" className='w-40 h-40 m-4 rounded-full' />
                <p className='pt-8 pb-6 text-gray-400 font-light'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
                <h2 className='text-1xl py-2 justify-center'>Garreth smith</h2>
                <h6 className='text-0.5xl py-2 justify-center'>SYSTEM ANALYST</h6>
            </div>
            

        </div>
    </div>
    <div>
        <div className='flex-col bg-slate-200 items-center flex md:flex-row justify-around my-8'>
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
    </div>
  )
}

export default Aboutus

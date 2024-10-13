import { Link} from "react-router-dom";

import fruit from '../assets/strawberry (1).jpg';
import Itemlist from './Items';

const Shop = () => {
  return (
    <>
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
          <section className='md:grid md:grid-cols-4 md:gap-4 ml-8 mb-8'>

            {
              Itemlist.map((item, index) =>
                {
                  return(
                    <div key={index} className="relative  border-2  m-16 md:m-2 bg-white shadow rounded-lg overflow-hidden" >
                      <img src={fruit} alt="Description" />
                      <h3 className="absolute top-0 left-0 md:left-0 md:top- bg-green-500 text-white px-3 py-1">
                        {item.discount}
                      </h3>
                      <div  className='text-center'>
                        <h2 className='my-3 uppercase'>
                          {item.pname}
                        </h2>
                        <h4 className='pb-6 '>
                          {item.price}
                          <span className='text-green-700 pl-4'>{item.priceSlash}</span> 
                        </h4>
                        <Link to={`/Productdescription/${item.id}`}>
                          <button className="p-2 bg-green-500 hover:bg-green-600 text-white font-bold my-2 rounded-full">
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  )
                }
              
              
              )
            }

            
             
          </section>  
        </div>
    </> 
  )
}

export default Shop

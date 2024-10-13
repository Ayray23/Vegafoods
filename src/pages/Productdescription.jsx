import { useParams } from 'react-router-dom'
import { Link} from "react-router-dom";
import pasta from '../assets/spaghetti.jpg'
import Itemlist from './Items';
import { useState } from 'react';
import Product from './Product';

const Productdescription = () => {

    const {id} = useParams();

    const [showModal, setShowModal] = useState(false);

  return (
    <>
      {
            Itemlist.filter((item) => item.id == id ).map((item, index) =>{
              return(
                <div key={index}>
              <div  className="flex flex-col md:flex-row">
                <img
                  className="w-full md:w-[400px] h-auto"
                    src={pasta}
                    alt="Product"
                  />
                  <div className="px-6 py-4">
                    <h3 className="font-bold text-lg uppercase text-gray-900">
                      {item.pname}
                      </h3>
                    <p className="text-gray-700 text-base mt-2">
                      {item.desc}
                    </p>
                    <p className="text-2xl font-semibold mt-3">{item.price}</p>
                  </div>
                </div>
                <div className='flex px-6 mt-4 gap-4 pb-4 justify-between items-center'>
                  <div className="gap-4">
                    <button onClick={()=> setShowModal(true)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 mr-6 rounded">
                      Add to Cart
                    </button>
                    <Link to='Login' >
                      <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full">
                        Buy now
                      </button>
                    </Link>
                  </div>
                </div>

                </div>

              )
            })
          }

          {
            showModal &&
          <div className="fixed inset-0 z-40 min-h-full overflow-y-auto overflow-x-hidden transition flex items-center">
            <div aria-hidden="true" className="fixed inset-0 w-full h-full bg-black/50 cursor-pointer">
            </div>

            <div className="relative w-full cursor-pointer pointer-events-none transition my-auto p-4">
                <div
                    className="w-full py-2 bg-white cursor-default pointer-events-auto dark:bg-gray-800 relative rounded-xl mx-auto max-w-sm">

                    <button  onClick={()=> setShowModal(false)} type="button" className="absolute top-2 right-2 rtl:right-auto rtl:left-2">
                        <svg title="Close" className="h-4 w-4 cursor-pointer text-gray-400"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path 
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                ></path>
                        </svg>
                        <span className="sr-only">
                            Close
                        </span>
                    </button>



                    <div className="space-y-2 p-2">
                        <div className="p-4 space-y-2 text-center dark:text-white">
                            <h2 className="text-xl font-bold tracking-tight" id="page-action.heading">
                                Place order
                            </h2>

                            <p className="text-gray-500">
                                Are you sure you would like to place your orders?
                            </p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div aria-hidden="true" className="border-t dark:border-gray-700 px-2"></div>

                        <div className="px-6 py-2">
                            <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(0,1fr))]">
                                <button type="button" onClick={()=> setShowModal(false)}
                                        className="inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset dark:focus:ring-offset-0 min-h-[2.25rem] px-4 text-sm text-gray-800 bg-white border-gray-300 hover:bg-gray-50 focus:ring-primary-600 focus:text-primary-600 focus:bg-primary-50 focus:border-primary-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-600 dark:hover:border-gray-500 dark:text-gray-200 dark:focus:text-primary-400 dark:focus:border-primary-400 dark:focus:bg-gray-800">
                                        <span className="flex items-center gap-1">
                                            <span className="">
                                                Cancel
                                            </span>
                                        </span>
                                    </button>

                                <button type="submit"
                                        className="inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset dark:focus:ring-offset-0 min-h-[2.25rem] px-4 text-sm text-white shadow focus:ring-white border-transparent bg-red-600 hover:bg-red-500 focus:bg-red-700 focus:ring-offset-red-700">

                                        <span className="flex items-center gap-1">
                                            <span className="">
                                                Confirm
                                            </span>
                                        </span>

                                    </button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
          </div>
          }




    </>
  )
}

export default Productdescription

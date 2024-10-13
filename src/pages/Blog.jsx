import food from '../assets/food.jpg'
const Blog = () => {
  return (
    <div>
      
      <section className="flex md:flex-row flex-col">
        <div className='flex-col w-2/3'>
            <div className='flex md:flex-row flex-col ml-8  '>
                <img src={food} alt="Description"  className='h-[200px] w-[350px]   md:w-[300px] md:h-[250px] mr-4 rounded-lg' />
                <div>
                    <h3 className='mb-4'>
                        <span className='mr-2'>July 20,2019 </span>
                        <span className='mr-2'>Admin</span>
                        <span className='text-gray-400'>3</span>
                    </h3>
                    <h1 className='text-2xl hover:text-green-500'>
                        Even the all-powerful Pointing has no control about the blind texts
                    </h1>
                    <p className='text-gray-400 mt-4 text-xl'>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </p>
                    <button className='bg-green-600  hover:border-2 hover:text-green-500 hover:border-green-700 text-white hover:bg-white p-2 rounded-full'>
                        Read more
                    </button>

                </div>
            </div>
            <div className='flex md:flex-row mt-8 flex-col ml-8  '>
                <img src={food} alt="Description"  className='h-[200px] w-[350px]   md:w-[300px] md:h-[250px] mr-4 rounded-lg' />
                <div>
                    <h3 className='mb-4'>
                        <span className='mr-2'>July 20,2019 </span>
                        <span className='mr-2'>Admin</span>
                        <span className='text-gray-400'>3</span>
                    </h3>
                    <h1 className='text-2xl hover:text-green-500'>
                        Even the all-powerful Pointing has no control about the blind texts
                    </h1>
                    <p className='text-gray-400 mt-4 text-xl'>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </p>
                    <button className='bg-green-600  hover:border-2 hover:text-green-500 hover:border-green-700 text-white hover:bg-white p-2 rounded-full'>
                        Read more
                    </button>

                </div>
            </div>
            <div className='flex md:flex-row mt-8 flex-col ml-8  '>
                <img src={food} alt="Description"  className='h-[200px] w-[350px]   md:w-[300px] md:h-[250px] mr-4 rounded-lg' />
                <div>
                    <h3 className='mb-4'>
                        <span className='mr-2'>July 20,2019 </span>
                        <span className='mr-2'>Admin</span>
                        <span className='text-gray-400'>3</span>
                    </h3>
                    <h1 className='text-2xl hover:text-green-500'>
                        Even the all-powerful Pointing has no control about the blind texts
                    </h1>
                    <p className='text-gray-400 mt-4 text-xl'>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </p>
                    <button className='bg-green-600  hover:border-2 hover:text-green-500 hover:border-green-700 text-white hover:bg-white p-2 rounded-full'>
                        Read more
                    </button>

                </div>
            </div>
            <div className='flex md:flex-row mt-8 flex-col ml-8  '>
                <img src={food} alt="Description"  className='h-[200px] w-[350px]   md:w-[300px] md:h-[250px] mr-4 rounded-lg' />
                <div>
                    <h3 className='mb-4'>
                        <span className='mr-2'>July 20,2019 </span>
                        <span className='mr-2'>Admin</span>
                        <span className='text-gray-400'>3</span>
                    </h3>
                    <h1 className='text-2xl hover:text-green-500'>
                        Even the all-powerful Pointing has no control about the blind texts
                    </h1>
                    <p className='text-gray-400 mt-4 text-xl'>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </p>
                    <button className='bg-green-600  hover:border-2 hover:text-green-500 hover:border-green-700 text-white hover:bg-white p-2 rounded-full'>
                        Read more
                    </button>

                </div>
            </div>
            

        </div>

            <div className='ml-8' >
                <input type="text" placeholder='search' className='border-2 w-96 h-16 p-2 rounded-lg mb-8 ' />   
                <h1 className='text-2xl mb-4'>
                    Categories    
                </h1> 
                <div className='divide-y '>
                <h2 className='pt-4 pb-2'>Vegetables(48)</h2>         
                <h2 className='pt-4 pb-2'>Fruits(24)</h2>         
                <h2 className='pt-4 pb-2'>Juice(32)</h2>         
                <h2 className='pt-4 pb-2'>Dries(12)</h2>         
                </div>

                <div className='mt-8 '>
                    <h1 className='mt-4 text-2xl mb-3 '>Recent Blog</h1>

                    <div className='flex  '>
                    <img src={food} alt="Description"  className='h-[100px] w-[160px]   md:w-[120px] md:h-[100px] -mr-4 rounded-lg' />
                    <h3 className=' mx-8 hover:text-green-700 text-xl'>
                    Even the all-powerful Pointing has no control about the blind texts
                    </h3>
                    <div className=' flex flex-col'>
                    <h4 className=''>
                        <span>April 09,2019</span>
                        <span>Admin</span>
                        <span>19</span>
                    </h4>

                    </div>

                    </div>
                </div>
                 
            </div>
      </section>










    </div>
  )
}

export default Blog

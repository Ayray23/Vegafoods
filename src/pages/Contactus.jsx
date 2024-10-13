import heroImage from '../assets/fruits.jpg'; 
import Shopping from '../assets/family.jpg'
const Contactus = () => {
  return (
    <div>
      
      <section
      className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white">
        <h3 className='text-1xl font-light'>Home Contactus</h3>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Contact us    
        </h1>
        </div>
    </section>


    <section className='grid-cols-1 gap-4  grid p-4 md:grid-cols-4'>
       
        <div className='bg-lime-100 h-40 w-64  md:w-64 md:h-40 ml-16 md:py-4 md:ml-8 px-6  text-black'>
            <h1>Address: 198 West 21th Street, Suite
                 721 New York NY 10016
            </h1>
        </div>
        <div className='bg-lime-100 h-40 w-64  md:w-64 md:h-40 ml-16 md:py-4 md:ml-8 px-4 text-black'>
            <h1>
                phone: + 1235 2355 98
            </h1>
        </div>
        <div className='bg-lime-100 h-40 w-64  md:w-64  md:h-40 ml-16  md:py-4 md:ml-8 px-4 text-black'>
            <h1>
                email: info@yoursite.com    
            </h1>
        </div>
        <div className='bg-lime-100 h-40 w-64 md:w-64  md:h-40  py-4 ml-16 md:ml-8 px-4 text-black'>
            <h1>
            Website yoursite.com
            </h1>
        </div>
        
    </section>

    <section className='flex ml-8 justify-center gap-4'>
    <img src={Shopping} alt="Description"  className='md:w-[550px] hidden md:block md:h-[550px]' />
    <form className='w-[80%] rounded-lg md:w-1/3 bg-gray-200 p-4'>
                    {/* Name */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 p-3 w-full border border-gray-300  shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Your Name"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 p-3 w-full border border-gray-300 r shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Your Email"
                            required
                        />
                    </div>

                    {/* Subject */}
                    <div className="mb-4">
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="mt-1 p-3 w-full border border-gray-300 r shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Subject"
                            required
                        />
                    </div>
                     {/* Message */}
                     <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="mt-1 p-3 w-full border border-gray-300  shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Your Message"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className=" p-3 bg-green-600 text-white rounded-md hover:bg-green-300 transition-colors"
                        >
                            Send Message
                        </button>
                    </div>

        </form>
    </section>





    </div>
  )
}

export default Contactus

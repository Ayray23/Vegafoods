// import { useHistory } from 'react-router-dom';
import { Link, NavLink } from "react-router-dom";

import Home from "./Home";

const NotFound = () => {
//   const history = useHistory(); 

  // Function to redirect to home
  const handleRedirect = () => {
    history.push('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">Sorry, the page you are looking for does not exist.</p>
        
        <Link to ='/'>
        <button className="text-green-600 text-xl rounded-lg p-3 hover:bg-green-600 hover:text-white ">Go Back Home </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

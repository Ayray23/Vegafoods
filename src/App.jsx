import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'
import Shop from './pages/Shop'
import Contact from './pages/Contactus'
import Aboutus from './pages/Aboutus';
import NotFound from './pages/Notfound';

import { Route ,Routes } from 'react-router-dom';
import Productdescription from './pages/Productdescription';
import Login from './pages/Login';


function App() {
  return (
    <div>
      <Header />
      <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="Shop" element={<Shop />}  />
          <Route path="Contact" element={<Contact />} />
          <Route path="Aboutus" element={<Aboutus />} />
          <Route path="Login" element={<Login />} />
          <Route path="Productdescription/:id" element={<Productdescription />} />
          <Route path='*' element={<NotFound/>} />
       
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

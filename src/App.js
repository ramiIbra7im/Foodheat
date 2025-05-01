import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';

import 'bootstrap-icons/font/bootstrap-icons.css'; 

import NavBar from './Comp/Page/NavBar';
import ScrollToTop from './Comp/Page/ScrollToTop';
import Home from './Comp/Page/Home';
import About from './Comp/Page/About';
import Foodmenu from './Comp/Page/Foodmenu';
import Chef from './Comp/Page/Chef';
import Services from './Comp/Page/Services';
import Login from './Comp/Page/Login';
import Contact from './Comp/Page/Contact';
import Footer from './Comp/Page/Footer';
import { CartProvider } from '../src/Comp/CO/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
            <CartProvider>

     <Router>
      <ScrollToTop/>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About/>} />
          <Route path="/Menu" element={<Foodmenu/>} />
          <Route path="/Chef" element={<Chef/>} />
          <Route path="/Services" element={<Services  />} />
          <Route path="/Login" element={<Login  />} />
          <Route path="/Contact" element={<Contact  />} />
        </Routes>
      <Footer/>
        </Router>
                </CartProvider>

    </>
  );
}

export default App;

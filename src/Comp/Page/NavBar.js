import { Link } from 'react-router-dom';
import '../Style/NavBar.css';
import SearchBar from '../CO/SearshNav';
import { BiCart } from 'react-icons/bi';
import { useCart } from '../CO/CartContext';
import { useState } from 'react';
import CartDropdown from '../CO/CartDropdown'; // استدعاء الكومبوننت الجديد

function NavBar() {
  const { cartItems } = useCart();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow">
      <div className="container">
        <Link className="navbar-brand" to="/">Food Heat</Link>

        <button className="navbar-toggler ms-auto me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 navbar-custom">
            {/* روابط الصفحات */}
            {['Home', 'About', 'Menu', 'Chef', 'Services', 'Contact'].map((item, idx) => (
              <li className="nav-item" key={idx}>
                <Link className="nav-link" to={`/${item === 'Home' ? '' : item}`}>{item}</Link>
              </li>
            ))}
          </ul>

          <div className='login-btn p-2 col-lg-2 me-2 d-flex justify-content-center'>
            <Link className="nav fw-bold" to="/Login">Login</Link>
          </div>

          {/* أيقونة السلة و Dropdown منفصل */}
         
        </div>
 <div className="cart-dropdown position-relative me-2">
            <div
              className="cart-icon position-relative"
              onClick={() => setShowDropdown(!showDropdown)}
              style={{ cursor: 'pointer' }}
            >
              <BiCart className='fs-2 text-secondary p-1 cart' />
              {cartItems.length > 0 && (
                <span className="badge bg-danger position-absolute top-0 start-100 translate-middle rounded-circle">
                  {cartItems.length}
                </span>
              )}
            </div>

            {/* استدعاء الكمبوننت الجديد */}
            <CartDropdown show={showDropdown} />
          </div>
        <SearchBar />
      </div>
    </nav>
  );
}

export default NavBar;

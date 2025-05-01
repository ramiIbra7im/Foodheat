import { useState, useEffect } from 'react';
import { IoFastFood } from 'react-icons/io5';
import { BiCartAdd } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';
import { useCart } from '../CO/CartContext';
import '../Style/Foodmenu.css';


import AOS from 'aos';
import 'aos/dist/aos.css';

import menuIcon1_1 from '../Assets/Images/menu/menuIcon1_1.png';
import menuIcon1_2 from '../Assets/Images/menu/menuIcon1_2.png';
import menuIcon1_3 from '../Assets/Images/menu/menuIcon1_3.png';
import menuIcon1_4 from '../Assets/Images/menu/menuIcon1_4.png';
import menuThumb1_1 from '../Assets/Images/menu/menuThumb1_1.png';
import menuThumb1_2 from '../Assets/Images/menu/menuThumb1_2.png';
import menuThumb1_3 from '../Assets/Images/menu/menuThumb1_3.png';
import menuThumb1_4 from '../Assets/Images/menu/menuThumb1_4.png';
import menuThumb1_5 from '../Assets/Images/menu/menuThumb1_5.png';
import menuThumb1_6 from '../Assets/Images/menu/menuThumb1_6.png';
import menuThumb1_7 from '../Assets/Images/menu/menuThumb1_7.png';
import menuThumb1_8 from '../Assets/Images/menu/menuThumb1_8.png';
import menuThumb1_9 from '../Assets/Images/menu/menuThumb1_9.png';
import menuThumb1_10 from '../Assets/Images/menu/menuThumb1_10.png';
import drink1 from '../Assets/Images/menu/drink1.png';
import drink2 from '../Assets/Images/menu/drink2.png';

function Foodmenu() {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 400,
      once: true,
    });
  }, []);

  const products = [
    { id: 1, image: menuThumb1_1, title: "Chinese Pasta", description: "Delicious Chinese-style pasta.", price: "$14.99", category: "Fresh Pasta" },
    { id: 2, image: menuThumb1_6, title: "Egg and Cucumber", description: "Eggs with cucumber.", price: "$65.00", category: "Fast Food" },
    { id: 3, image: menuThumb1_2, title: "Chicken Fried Rice", description: "Fried rice with chicken.", price: "$24.00", category: "Fast Food" },
    { id: 4, image: menuThumb1_7, title: "Chicken White Rice", description: "White rice with chicken.", price: "$134.99", category: "Fast Food" },
    { id: 5, image: menuThumb1_3, title: "Chicken Pizza", description: "Pizza with chicken.", price: "$119.99", category: "Chicken Pizza" },
    { id: 6, image: menuThumb1_8, title: "Special Burger", description: "Signature burger.", price: "$95.00", category: "Fast Food" },
    { id: 7, image: menuThumb1_4, title: "Chicken Noodles", description: "Noodles with chicken.", price: "$154.99", category: "Fast Food" },
    { id: 8, image: menuThumb1_9, title: "Vegetables Burger", description: "Burger with veggies.", price: "$75.00", category: "Fast Food" },
    { id: 9, image: menuThumb1_5, title: "Grilled Chicken", description: "Grilled chicken.", price: "$55.00", category: "Fast Food" },
    { id: 10, image: menuThumb1_10, title: "Brief Chicken", description: "Tender chicken dish.", price: "$44.99", category: "Fast Food" },
    { id: 11, image: drink1, title: "Tasty Mint Julep Cocktail", description: "Tender chicken dish.", price: "$8.00", category: "Drink & Juice" },
    { id: 12, image: drink2, title: "Coffe", description: "Tender chicken dish.", price: "$9.99", category: "Drink & Juice" },
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);
  const handleSelectCategory = (category) => setActiveCategory(category);

  const filteredProducts = activeCategory
    ? products.filter(p => p.category === activeCategory)
    : products;

  return (
    <>
      <div className="container-fluid food-menu-container text-center pt-5 mt-5 pb-5">
        <div className='container'>
        <div className="d-flex justify-content-center align-items-center mb-3">
          <IoFastFood className="animate-in-icon" />
          <h4 className="px-2 mb-0 title">FOOD MENU</h4>
          <IoFastFood className="animate-in-icon" />
        </div>

        <h1 className="fw-bold display-5 mb-5">Food Heat Menu</h1>

        {/* Categories */}
        <div className="row gap-4 flex-wrap d-flex justify-content-center pb-5">
          <div className={`col-lg-3 col-5 food-menu-asnaf shadow-sm p-3 ${activeCategory === 'Fast Food' ? 'active' : ''}`} onClick={() => handleSelectCategory('Fast Food')}>
            <img src={menuIcon1_1} alt="Fast Food" className="img-fluid me-2" style={{ width: '40px' }} />
            <h5>Fast Food</h5>
          </div>

          <div className={`col-lg-3 col-5 food-menu-asnaf shadow-sm p-3 ${activeCategory === 'Drink & Juice' ? 'active' : ''}`} onClick={() => handleSelectCategory('Drink & Juice')}>
            <img src={menuIcon1_2} alt="Drink & Juice" className="img-fluid me-2" style={{ width: '40px' }} />
            <h5>Drink & Juice</h5>
          </div>

          <div className={`col-lg-3 col-5 food-menu-asnaf shadow-sm p-3 ${activeCategory === 'Chicken Pizza' ? 'active' : ''}`} onClick={() => handleSelectCategory('Chicken Pizza')}>
            <img src={menuIcon1_3} alt="Chicken Pizza" className="img-fluid me-2" style={{ width: '40px' }} />
            <h5>Chicken Pizza</h5>
          </div>

          <div className={`col-lg-2 col-5 food-menu-asnaf shadow-sm p-3 ${activeCategory === 'Fresh Pasta' ? 'active' : ''}`} onClick={() => handleSelectCategory('Fresh Pasta')}>
            <img src={menuIcon1_4} alt="Fresh Pasta" className="img-fluid me-2" style={{ width: '40px' }} />
            <h5>Fresh Pasta</h5>
          </div>
        </div>

        {/* Products */}
        <div className="row g-3 m-0 mt-4">
          {filteredProducts.map((item, index) => (
            <div
              key={item.id}
              className="col-12 col-lg-3 "
              data-aos="fade-up"
              data-aos-delay={index * 50}
              onClick={() => handleProductClick(item)}
              style={{ cursor: 'pointer' }}
            >
              <div className="card-coustom shadow-sm p-3  m-3">
                <div className="text-center mb-3 img-items m-auto">
                  <img src={item.image} alt={item.title} style={{ width: "60%" }}  />
                </div>
                <div className="text-start">
                  <h4 className="fw-bold">{item.title}</h4>
                  <div className='fivestar'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                  <p className="small ">{item.description}</p>
                  <h4 className="text-end fw-bold">{item.price}</h4>
                </div>
              </div>
            </div>
          ))}
          </div>
          </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className={`modal fade ${showModal ? 'show d-block' : ''}`} tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} onClick={handleCloseModal}>
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '900px' }} onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <div className="row align-items-center">
                  <div className="col-md-5 text-center mb-3 mb-md-0">
                    <img src={selectedProduct.image} alt={selectedProduct.title} className="img-fluid rounded p-3" style={{ width: '80%' }} />
                  </div>
                  <div className="col-md-7 text-start">
                    <h2 className="fw-bold">{selectedProduct.title}</h2>
                    <h4 className="text-muted">{selectedProduct.price}</h4>
                    <div className='fivestar'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                    <p className="mt-3">{selectedProduct.description}</p>
                    <p className="small text-secondary">This delicious meal is crafted with top-quality ingredients...</p>

                    {/* Quantity Control */}
                    <div className="d-flex align-items-center mb-3">
                      <button className="btn btn-outline-secondary" onClick={() => setQuantity(prev => Math.max(1, prev - 1))}>-</button>
                      <span className="mx-3 fw-bold">{quantity}</span>
                      <button className="btn btn-outline-secondary" onClick={() => setQuantity(prev => prev + 1)}>+</button>
                    </div>

                    {/* Add to Cart */}
                    <div className='btn-add-cart col-7 mt-3 p-3 shadow-sm rounded' onClick={() => {
                      addToCart(selectedProduct, quantity);
                      setShowModal(false);
                    }}>
                      <span className='d-flex align-items-center justify-content-between'>
                        <h5 className='mb-0 fw-bold'>Add {quantity} to Cart</h5>
                        <BiCartAdd className='fs-3' />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Foodmenu;

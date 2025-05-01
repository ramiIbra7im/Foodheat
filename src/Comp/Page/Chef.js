import { FaPhoneAlt, FaLinkedin } from 'react-icons/fa';
import '../Style/Chef.css';
import chefeThumb1_1 from '../Assets/Images/menu/chefeThumb1_1.png';
import chefeThumb1_2 from '../Assets/Images/menu/chefeThumb1_2.png';
import chefeThumb1_3 from '../Assets/Images/menu/chefeThumb1_3.png';
import burgerLayer from '../Assets/Images/menu/burgerLayer.png';

function Chef() {
    return (
        <div className="container-fluid chef-container text-center pt-5 mt-5">
            <div className="d-flex justify-content-center align-items-center mb-3">
                <h4 className="px-2 mb-0 title animate-title">OUR CHEFS</h4>
            </div>
                <img src={ burgerLayer} alt='burgerLayer' className='burgerLayer' />
            <h1 className="fw-bold display-5 mb-5 animate-title">Meet Our Expert Chefs</h1>

            <div className='container'>
                <div className='row gap-2'>
                    {/* الشيف الأول */}
                    <div className='col'>
                        <div className="chef-card animate-chef delay-1">
                            <img src={chefeThumb1_1} alt='' />
                           <div className='content-chef mt-4 pt-3  row'>
                                <div className=' col '>
                                <h3>Ramy Ibrahim</h3>
                                <p>Chef Assistant</p>
                                </div>
                                <div className="contact-icons col-1 row m-0 p-0">
                                    <FaPhoneAlt className="contact-icon  p-0  " />
                                    <FaLinkedin className="contact-icon  p-0" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* الشيف الثاني */}
                    <div className='col'>
                        <div className="chef-card animate-chef delay-2">
                            <img src={chefeThumb1_2} alt='' />
                            <div className='content-chef pt-3 mt-4 row'>
                                <div className=' col '>
                                <h3>Bassant Yaser</h3>
                                <p>Chef Leader </p>
                                </div>
                                <div className="contact-icons col-1 row m-0 p-0">
                                    <FaPhoneAlt className="contact-icon  p-0" />
                                    <FaLinkedin className="contact-icon  p-0" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* الشيف الثالث */}
                    <div className='col'>
                        <div className="chef-card animate-chef delay-3">
                            <img src={chefeThumb1_3} alt='' />
                            <div className='content-chef mt-4 pt-3  row'>
                                <div className=' col '>
                                <h3>Mohamed Ali</h3>
                                <p>Chef Assistant</p>
                                </div>
                                <div className="contact-icons col-1 row m-0 p-0">
                                    <FaPhoneAlt className="contact-icon p-0" />
                                    <FaLinkedin className="contact-icon p-0 " />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chef;

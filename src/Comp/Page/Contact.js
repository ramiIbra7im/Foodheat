import { CiLocationOn } from 'react-icons/ci';
import '../Style/Contact.css';
import { MdEmail } from 'react-icons/md';
import { TiTime } from 'react-icons/ti';
import { BiPhone } from 'react-icons/bi';
import { useState } from 'react';
import dd from '../Assets/Images/menu/menuIcon1_3.png'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('تم إرسال رسالتك بنجاح!');
        // Reset form
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <>
            <div className="container-fluid contact pb-5">
                <div className="row container-sm m-auto gap-3">

                    <div className="col Content-contact text-center p-3">
                        <CiLocationOn className='display-3 icons-contact p-2 my-4' />
                        <h3>Our Address</h3>
                        <p className='text-secondary'>4517 Washington Ave. Manchester, Kentucky 39495</p>
                    </div>

                    <div className="col-lg Content-contact text-center p-3">
                        <MdEmail className='display-3 icons-contact p-2 my-4' />
                        <h3>info@example.com</h3>
                        <p className='text-secondary'> Email us anytime for any kind ofquety.    </p>
                    </div>

                    <div className="col-lg Content-contact text-center p-3">
                        <TiTime className='display-3 icons-contact p-2 my-4' />
                        <h3>Opening Hours</h3>
                        <p className='text-secondary'>Sunday-Fri: 9 AM – 6 PM<br />Saturday: 9 AM – 4 PM</p>
                    </div>

                    <div className="col-lg Content-contact text-center p-3">
                        <BiPhone className='display-3 icons-contact p-2 my-4' />
                        <h3>Hot: +201234567890</h3>
                        <p className='text-secondary'>24/7 Live Chat and ticketing support</p>
                    </div>

                </div>

                {/* Contact Form */}
                <div className="row mt-5 p-0 justify-content-center container m-auto">
                    <div className=" text-center">
                        <form onSubmit={handleSubmit} className="p-4 col-lg-10 m-auto shadow-sm bg-white rounded div-form">
                            <h1 className=' my-5'>Get in Touch</h1>
                            <img src={dd} alt='' className='img-pizza'/>
                            <div className="mb-3 col-lg-6 m-auto">
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control  "
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder='Full Name'
                                />
                            </div>
                            <div className="mb-3 m-auto col-lg-6">
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder='Email'
                                />
                            </div>
                            <div className="mb-3 m-auto col-lg-6">
                                <textarea
                                    name="message"
                                    className="form-control"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder='Massege'
                                />
                            </div>
                            <button type="submit" className="btn btn-submit fw-bold  col-lg-6 col-sm-8">SUBMIT NOW </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;

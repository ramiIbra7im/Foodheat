import '../Style/Services.css'
import one from '../Assets/Images/menu/IconServ/1.png'
import tow from '../Assets/Images/menu/IconServ/2.png'
import three from '../Assets/Images/menu/IconServ/3.png'
import four from '../Assets/Images/menu/IconServ/4.png'
import five from '../Assets/Images/menu/IconServ/5.png'
import six from '../Assets/Images/menu/IconServ/6.png'
import { GiFoodChain, GiTomato } from 'react-icons/gi';
import { useEffect } from 'react'
import Aos from 'aos'

// import 'aos/dist/aos.css';
function Services() {

    const servmap = [
        {
            id: 1, img: one,
            title: 'Dining Guides',
            descpion: 'Detailed reviews of local eateries, covering various cuisines, price points, and dining experiences.',

        },
        {
            id: 2, img: tow,
            title: '100% Fresh Food',
            descpion: 'Detailed reviews of local eateries, covering various cuisines, price points, and dining experiences.',

        },
        {
            id: 3, img: three,
            title: 'Special Offers and Discounts',
            descpion: 'Detailed reviews of local eateries, covering various cuisines, price points, and dining experiences.',

        },
        {
            id: 4, img: four,
            title: 'Restaurant Reviews',
            descpion: 'Detailed reviews of local eateries, covering various cuisines, price points, and dining experiences.',

        },
        {
            id: 5, img: five,
            title: 'Catering for Occasion',
            descpion: 'Detailed reviews of local eateries, covering various cuisines, price points, and dining experiences.',

        },
        {
            id: 6, img: six,
            title: 'Easy Online Ordering',
            descpion: 'Detailed reviews of local eateries, covering various cuisines, price points, and dining experiences.',

        },
    ]

    useEffect(() => {
        Aos.init({
            duration: 400,
            once: true,
        });
    }, []);


    return (
        <>
            <div className="container-fluid chef-container text-center pt-5 mt-5">
                <div className="d-flex justify-content-center align-items-center mb-3">
                    <h4 className="px-2 mb-0 title animate-title">Services </h4>
                </div>
                <h1 className="fw-bold display-5 mb-5 animate-title">Meet Our Expert Chefs</h1>

                <div className="container">
                    <div className="row gap-4 text-start  pb-5 d-flex justify-content-center" >

                            {servmap.map((index) => (
                        <div className="col-lg-3 col-12 p-4 co-serv position-relative overflow-hidden" data-aos="fade-up" data-aos-delay={index*50} >
                                    <div key={index.id}>
                                    <img src={index.img} alt='' className='img-icon mt-3 mb-5' />
                                    <h3 className='fw-bold'>{ index.title}</h3>
                                    <p>{ index.descpion}</p>
                                    {/* الأيقونة برة النص الأساسي، ومكانها ثابت داخل الكارد */}
                                    <GiTomato className="icon-fast" />
                                    <GiFoodChain className="icon-onion" />
                                </div>
                        </div>
                            ))}

                    </div>
                </div>
            </div>

        </>
    )
}
export default Services;
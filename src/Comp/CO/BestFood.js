import { useEffect, useState, useRef } from 'react';
import { IoFastFood } from 'react-icons/io5';
import ChickenPizza from '../Assets/Images/menu/item1_1.png';
import GrilledChicken from '../Assets/Images/menu/item1_4.png';
import ChickenFriedRice from '../Assets/Images/menu/item1_3.png';
import EggandCucumber from '../Assets/Images/menu/item1_2.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import '../Style/Bestfood.css';

function BestFood() {
    const [animate, setAnimate] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {


        const sectionElement = sectionRef.current; // تخزين المرجع في متغير داخل الـ useEffect
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                }
            });
        }, {
            threshold: 0.5 // عندما يكون 50% من العنصر داخل الشاشة، يبدأ الأنيميشن
        });

        if (sectionElement) {
            observer.observe(sectionElement);
        }

        // تنظيف المراقب عند التفريغ
        return () => {
            if (sectionElement) {
                observer.unobserve(sectionElement);
            }
        };
    }, []); // تركنا الـ dependency فارغاً لتشغيل الـ useEffect عند التصفير فقط

    return (
        <div className="container ">
            <div className="container m-auto text-center pt-5  ">
                <div 
                    ref={sectionRef} // ربط العنصر بالمراقب
                    className={`d-flex justify-content-center align-items-center Bestfood  ${animate ? 'animate-in' : ''}`} 
                >
                    <IoFastFood className={`animate-in-icon`} />
                    <h4 className='ps-1 pe-1'> BestFood  </h4>
                    <IoFastFood className={`animate-in-icon`} />
                </div>

                <h1 className={`fw-bold ${animate ? 'animate-in' : ''}`}>Popular Food Items</h1>

                <div className="pt-5 pb-5 p-4 ">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            576: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            992: { slidesPerView: 4 },
                        }}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        loop={true}
                        grabCursor={true}
                        speed={1000}
                        effect='slide'
                    >
                        <SwiperSlide>
                            <Card
                                image={EggandCucumber}
                                title="Egg and Cucumber"
                                price="$28.00"
                                
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card
                                image={ChickenFriedRice}
                                title="Chicken Fried Rice"
                                price="$99.99"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card
                                image={GrilledChicken}
                                title="Grilled Chicken"
                                price="$25.99"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card
                                image={ChickenPizza}
                                title="Chicken Pizza"
                                price="$26.99"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card
                                image={EggandCucumber}
                                title="Egg and Cucumber"
                                price="$28.00"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

function Card({ image, title, price }) {
    return (
        <div className="card-coustom shadow p-3  m-3">
            <span className='img-co '>
                <img src={image} alt='' className='img-bestfood' />
            </span>
            <h5 className='title pt-2'>{title}</h5>
            <p className='descrpion'>It's a testament to our.</p>
            <h3 className='price pb-3'>{price}</h3>
        </div>
    );
}

export default BestFood;

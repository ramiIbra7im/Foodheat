import { useEffect, useState, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import '../Style/Home.css';
import pizzaHero from '../Assets/Images/hero-pizza.png';
import BestFood from '../CO/BestFood';
import offerThumb1 from '../Assets/Images/menu/offerThumb1_1.png';
import offerThumb2 from '../Assets/Images/menu/offerThumb1_2.png';
import offerThumb3 from '../Assets/Images/menu/offerThumb1_3.png';
import { IoFastFood } from 'react-icons/io5';

function Home() {
    const [animate, setAnimate] = useState(false);
    const [loopRotate, setLoopRotate] = useState(false);
    const tiltRef = useRef(null);

    // ✅ حالة العداد
    const [timeLeft, setTimeLeft] = useState({
        day: 365,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    // ✅ دالة تنسيق الوقت
    const formatTime = (value) => value.toString().padStart(2, '0');

    useEffect(() => {
        // تفعيل الأنيميشن بعد مدة معينة
        setAnimate(true);

        const timer = setTimeout(() => {
            setLoopRotate(true);
        }, 1500);

        if (tiltRef.current) {
            VanillaTilt.init(tiltRef.current, {
                max: 15,
                speed: 400,
                scale: 1.05,
            });
        }

        return () => clearTimeout(timer);
    }, []);

    // ✅ العداد التنازلي
    useEffect(() => {
        const countdown = setInterval(() => {
            setTimeLeft((prev) => {
                let { day, hours, minutes, seconds } = prev;

                if (day === 0 && hours === 0 && minutes === 0 && seconds === 0) {
                    clearInterval(countdown);
                    return prev;
                }

                if (seconds > 0) {
                    seconds--;
                } else {
                    if (minutes > 0) {
                        minutes--;
                        seconds = 59;
                    }
                    else if (hours > 0) {

                        hours--;
                        minutes = 59;
                        seconds = 59;
                    }
                    else if (day > 0) {
                        day--;
                        hours = 23;
                        minutes = 59;
                        seconds = 59;
                    }
                }

                return { day, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(countdown);
    }, []);

    return (
        <>
            <div className="container-fluid section-hero min-vh-100 d-flex align-items-center justify-content-center text-center">
                <div className="container">
                    <div className="row align-items-center text-start">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <h3 className="welcome">WELCOME FRESHEAT</h3>
                            <h1 className="title text-white fw-bold display-1">Egypt Deeb Pizza King</h1>
                            <div className='btn btn-order-now fw-bold'>Order Now</div>
                        </div>
                        <div className="col-lg-6">
                            <div className={`hero-wrapper ${animate ? 'animate-in' : ''} ${loopRotate ? 'rotate-loop' : ''}`}>
                                <img
                                    ref={tiltRef}
                                    src={pizzaHero}
                                    alt=""
                                    className="hero-pizza"
                                    style={{ width: '90%' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid row m-auto gap-3 mb-5 best-section '>
                <BestFood />

                {/* كارت 1 */}
                <div className='col-lg col-sm-12 offer p-4 d-flex align-items-center shadow-sm'>
                    <div className="discount-badge">50% OFF</div>
                    <div className="text-start ms-3">
                        <p className='mb-1 tit fw-bold'>ON THIS WEEK</p>
                        <h4 className='mb-2 fw-bold'>SPICY FRIED CHICKEN</h4>
                        <p className='mb-3'>Limited Time Offer</p>
                        <div className='btn btn-order-now fw-bold'>Order Now</div>
                    </div>
                    <img src={offerThumb1} alt='ww' style={{ width: "30%", marginLeft: "1rem" }} />
                </div>

                {/* كارت 2 */}
                <div className='col-lg col-sm-12 offer p-4 d-flex align-items-center shadow-sm'>
                    <div className="discount-badge">50% OFF</div>
                    <div className='text-start'>
                        <p className='mb-1 tit fw-bold'>WELCOME FOOD HEAT</p>
                        <h4 className='mb-2 fw-bold'>TODAY SPACIAL FOOD</h4>
                        <p className='mb-3'>Limited Time Offer</p>
                        <div className='btn btn-order-now fw-bold'>Order Now</div>
                    </div>
                    <img src={offerThumb2} alt='ww' style={{ width: "30%", marginLeft: "1rem" }} />
                </div>

                {/* كارت 3 */}
                <div className='col-lg col-sm-12 offer p-4 d-flex align-items-center shadow-sm'>
                    <div className="discount-badge">50% OFF</div>
                    <div className='text-start'>
                        <p className='mb-1 tit fw-bold'>ON THIS WEEK</p>
                        <h4 className='mb-2 fw-bold'>SPECIAL CHICKEN ROLL</h4>
                        <p className='mb-3'>Limited Time Offer</p>
                        <div className='btn btn-order-now fw-bold'>Order Now</div>
                    </div>
                    <img src={offerThumb3} alt='ww' style={{ width: "30%", marginLeft: "1rem" }} />
                </div>

                <div className='container p-0'>
                </div>

                <div className='container-fluid bg-offer row'>
                    <div className='col-lg-7 row align-items-end '>
                        <div className='img-offer text-center col-8  m-0 mx-auto row align-items-end'>
                            <img src={offerThumb1} alt='' className='img-off  m-auto  ' />
                        </div>
                    </div>

                    {/* ✅ Special Offer مع العداد */}
                    <div className='col-lg-4 py-5 ofer-div m-auto text-center'>
                        <div className='d-flex justify-content-center'>
                            <IoFastFood className="animate-in-icon" />
                            <h4 className="px-2 mb-3 mb-0 title ">Special Offer</h4>
                            <IoFastFood className="animate-in-icon" />
                        </div>
                        <h3 className='text-white'>Get 30% Discount Every Item</h3>
                        <div className='text-white mt-3'>
                            <div className='time-offer fw-bold  justify-content-center d-flex'>
                                <div className='time m-2 p-2'>
                                    <h3>
                                        {formatTime(timeLeft.day)}
                                    </h3>
                                    <h4 className='border-top'>DAYS</h4>
                                </div>
                                <div className='time m-2 p-2'>
                                    <h3>
                                        {formatTime(timeLeft.hours)}
                                    </h3>
                                    <h4 className='border-top'>HRS</h4>

                                </div>
                                <div className='time m-2 p-2'>
                                    <h3>
                                        {formatTime(timeLeft.minutes)}

                                    </h3>
                                    <h4 className='border-top'>MINS</h4>

                                </div>
                                <div className='time m-2 p-2 fw'>
                                    <h3>
                                        {formatTime(timeLeft.seconds)}
                                    </h3>
                                    <h4 className='border-top'>SECS</h4>
                                </div>
                            </div>
                                <div className='btn btn-order fw-bold mt-5 text-white'>Order Now</div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;

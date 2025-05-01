import { IoFastFood } from 'react-icons/io5';
import { useEffect, useState, useRef } from 'react';
import '../Style/About.css';
import aboutShape1 from '../Assets/Images/menu/aboutShape1_3.png';
import aboutShape2 from '../Assets/Images/menu/aboutShape1_6.png';

function About() {
    const [animate, setAnimate] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const sectionElement = sectionRef.current;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                }
            });
        }, {
            threshold: 0.5
        });

        if (sectionElement) {
            observer.observe(sectionElement);
        }

        return () => {
            if (sectionElement) {
                observer.unobserve(sectionElement);
            }
        };
    }, []);

    return (
        <div ref={sectionRef} className="about-section container-fluid  m-0 mb-5 mt-5">
            <div className="row m-0 p-0 align-items-center justify-content-center ">


                <div className="col-lg-3 col-sm-12 d-flex justify-content-center shape-r p-5">
                    <img src={aboutShape1} alt="" className="img-fluid" />
                </div>

                <div className="col-lg-6 col-sm-12 content-about text-center shadow p-3 ">
                    <div className={`Bestfood d-flex justify-content-center align-items-center mb-3 ${animate ? 'animate-in' : ''}`}>
                        <IoFastFood className="animate-in-icon" />
                        <h4 className="ps-2 pe-2 mb-0">About US</h4>
                        <IoFastFood className="animate-in-icon" />
                    </div>
                    <h1 className="main-title pt-4 m-0 pb-4">Variety of flavours from Egypt cuisine</h1>
                    <p>It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point established fact that</p>
                </div>

                <div className="col-lg-3 col-sm-12 d-flex justify-content-center shape-left p-5">
                    <img src={aboutShape2} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    );
}

export default About;

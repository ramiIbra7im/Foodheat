import { FaLocationDot } from "react-icons/fa6";
import '../Style/Footer.css';
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { BsArrowRight, BsTwitterX, BsYoutube } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { BiSolidFoodMenu } from "react-icons/bi";
import { motion } from "framer-motion";

function Footer() {

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <motion.div
            className="container-fluid footer"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div className="row p-4 my-5 contact-div container m-auto" variants={containerVariants}>
                {[ // contact sections
                    {
                        icon: <FaLocationDot className="fs-1" />,
                        title: "address",
                        text: "Zagazig Midan Elqawmya"
                    },
                    {
                        icon: <MdEmail className="fs-1" />,
                        title: "send email",
                        text: "info@exmple.com"
                    },
                    {
                        icon: <IoCall className="fs-1" />,
                        title: "call emergency",
                        text: "+201234567890"
                    }
                ].map((item, idx) => (
                    <motion.div key={idx} className="col gap-2 d-flex text-white" variants={itemVariants}>
                        <div className="align-items-center d-flex">{item.icon}</div>
                        <div className="row">
                            <h6>{item.title}</h6>
                            <h4>{item.text}</h4>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div className="row text-white container m-auto" variants={containerVariants}>
                
                {/* Logo and icons */}
                <motion.div className="col" variants={itemVariants}>
                    <BiSolidFoodMenu className="display-2" />
                    <h6 className="my-3 lh-6">
                        Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a lacinia curabitur lacinia mollis
                    </h6>
                    <div className="d-flex col fs-2 gap-2 mt-5">
                        {[FaFacebookSquare, BsTwitterX, LiaLinkedin, BsYoutube].map((Icon, idx) => (
                            <motion.div key={idx} variants={itemVariants}>
                                <Icon className="icon-2 p-1" />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Quick Links */}
                <motion.div className="col text-center" variants={itemVariants}>
                    <h4 className="line">Quick Links</h4>
                    {["About Us", "Our Gallery", "Our Blogs", "FAQ’S", "Contact Us"].map((link, idx) => (
                        <motion.h6 className="link" key={idx} variants={itemVariants}>
                            {link}
                        </motion.h6>
                    ))}
                </motion.div>

                {/* Our Menu */}
                <motion.div className="col text-center" variants={itemVariants}>
                    <h4 className="line">Our Menu</h4>
                    {["Burger King", "Pizza king", "Fresh Food", "Vegetable", "Desserts"].map((item, idx) => (
                        <motion.h6 className="link " key={idx} variants={itemVariants}>
                            {item}
                        </motion.h6>
                    ))}
                </motion.div>

                {/* Contact Us + Email */}
                <motion.div className="col" variants={itemVariants}>
                    <h4>Contact Us</h4>
                    <h6 className="text-secondary">
                        Monday – Friday: <span className="items-time">8am – 4pm</span>
                    </h6>
                    <h6 className="text-secondary">
                        Saturday: <span className="items-time">8am – 12am</span>
                    </h6>

                    <motion.div className="inp-email row p-2 mt-4" variants={itemVariants}>
                        <input
                            type="email"
                            required
                            placeholder="Enter Your Email"
                            className="col-10 fw-bold"
                        />
                        <BsArrowRight className="arrow p-2 fs-1 col-2" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default Footer;

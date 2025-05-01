import '../Style/Login.css'
import profile from '../Assets/Images/profile.png'
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        let formErrors = {};

        if (!email.trim()) {
            formErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formErrors.email = "Email is invalid";
        }

        if (!password.trim()) {
            formErrors.password = "Password is required";
        }

        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            console.log("Form submitted:", { email, password });
            // Proceed with login
        }
    };

    return (
        <>
            <div className="container-fluid login pb-5 pt-5 ">
                <div className="container m-auto login-co p-3 p-0 mt-5 row m-2  ">

                    <div className='form-co  text-center m-auto  col-lg col-sm-10'>
                        <h1 className='fw-bold  mt-5'>Welcome Back</h1>
                        <p>Please Enter Your Details</p>

                        <form className="col-8 mx-auto mt-5" onSubmit={handleSubmit} noValidate>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className={`form-control mb-3 ${errors.email ? 'is-invalid' : ''}`}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <div className="text-danger mb-2 text-start">{errors.email}</div>}

                            <input
                                type="password"
                                placeholder="Enter your password"
                                className={`form-control mb-4 ${errors.password ? 'is-invalid' : ''}`}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && <div className="text-danger mb-2 text-start">{errors.password}</div>}

                            <p className='text-end forget m-0'>Forgot Password?</p>

                            <div className='d-flex mb-4 align-items-center'>
                                <input type='checkbox' className='me-2' />
                                <h6 className='m-0 text-secondary'>Remember For 30 days</h6>
                            </div>

                            <button type="submit" className="btn btn-login col-12 text-white fw-bold mb-3">Login</button>

                            <div className='d-flex btn-login-google shadow-sm col-12 justify-content-center align-items-center'>
                                <FcGoogle className='fs-3' />
                                <div className=" fw-bold p-2">Log In With Google</div>
                            </div>
                        </form>

                        <div className='my-5'>
                            <h6>Don’t have an account? <span className='ms-1 SignUp fw-bold'>Sign Up</span></h6>
                        </div>
                    </div>

                    <div className='col text-center '>
                        <img src={profile} alt='profile' className='img-profile ' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;

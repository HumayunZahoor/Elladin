import React, {useState} from 'react';
import { FaSignInAlt, FaEnvelope, FaLock , FaEye, FaEyeSlash} from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { GiMagicLamp } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import img1 from '../images/bg.png';
import img2 from '../images/bg(1).png';
import img3 from '../images/bg.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../customStyling/custom.css';

const SignIn = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    cssEase: "ease-in-out",
    fade: true,
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-custom-gray overflow-hidden">
      <div className="w-full md:w-1/2 h-screen flex justify-center items-center relative z-0">
        <Slider {...settings} className="w-full h-full mt-2">
          <div className="flex justify-center">
            <img src={img1} alt="First Slide" className="w-full h-[calc(100vh-40px)] object-fit rounded-[40px] m-4" />
          </div>
          <div className="flex justify-center">
            <img src={img2} alt="Second Slide" className="w-full h-[calc(100vh-40px)] object-fit rounded-[40px] m-4" />
          </div>
          <div className="flex justify-center">
            <img src={img3} alt="Third Slide" className="w-full h-[calc(100vh-40px)] object-fit rounded-[40px] m-4" />
          </div>
        </Slider>
      </div>

      <div className="w-full md:w-1/2 h-screen flex flex-col justify-center items-center bg-custom-gray relative z-10 px-4 md:px-8">
        <div className="flex justify-between items-center w-full mb-8 px-4 md:px-20">
          <div className="flex items-center">
            <GiMagicLamp className="text-[#F37222] h-10 w-10 mr-2 p-1 rounded-full bg-opacity-5" />
            <span className="text-white font-semibold text-lg">Eladdin AI</span>
          </div>
          <div className="flex items-center justify-center border-2 border-white border-opacity-5 rounded-full p-2">
            <Link to="/" className="text-white mr-2 flex items-center">
              Create Account
              <FaSignInAlt className="text-white h-6 w-8 p-1 rounded-full" />
            </Link>
          </div>
        </div>

        <h1 className="text-3xl font-semibold text-white mb-10 text-center">Sign In</h1>

        <button className="text-white p-1 rounded-full mb-4 flex items-center justify-center border-2 border-white border-opacity-5 w-4/5 md:w-3/5">
          <FcGoogle className="mr-2 h-6 w-6" /> Continue with Google
        </button>
        

        <div className="flex items-center justify-center ">
        <div className="flex-grow h-px min-w-[180px] bg-gray-300 opacity-5"></div>
        <span className="px-4 text-gray-500">or</span>
        <div className="flex-grow h-px min-w-[180px] bg-gray-300 opacity-5"></div>
        </div>

        <form className="w-4/5 md:w-3/5 mb-4">
          <div className="mb-4">
            <label className="text-white mb-2 block" htmlFor="email">E-mail</label>
            <div className="relative">
              <FaEnvelope className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
              <input
                type="email"
                id="email"
                placeholder="E-mail"
                className="p-1 pl-10 border border-gray-500 rounded-full w-full bg-[#3A3A3A] text-white placeholder-gray-400"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="text-white mb-2 block" htmlFor="password">Password</label>
            <div className="relative">
              <FaLock className="absolute top-1/4 transform -translate-y-1/2 left-3 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Password"
                className="p-1 pl-10 border border-gray-500 rounded-full w-full bg-[#3A3A3A] text-white placeholder-gray-400"
              />
              <span
               className="absolute top-1/4 transform -translate-y-1/2 right-3 cursor-pointer text-gray-400"
               onClick={togglePasswordVisibility}
              >
               {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
              <Link to='/ForgotPassword' className='text-white text-opacity-10 mt-3 mb-5'>Forgot Password</Link>
            </div>
          </div>

          <button type="submit" className="bg-[#F37222] text-white p-1 rounded-full w-full">Sign In</button>
        </form>

        <div className="mt-4 w-4/5 md:w-3/5 text-gray-500 text-center">
          <Link to="/terms" className="text-sm">By Sign in an account, you agree to our Terms of Service and Privacy & Cookie Statement.</Link>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .bg-custom-gray {
            position: absolute;
            z-index: 10;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            padding-top: 20px;
            opacity: 0.9;
          }
          .w-full {
            z-index: 5;
          }
        }
      `}</style>
    </div>
  );
};

export default SignIn;

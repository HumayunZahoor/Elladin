import React from 'react';
import { GiMagicLamp } from "react-icons/gi";
import { FaEnvelope } from 'react-icons/fa';

const ForgotPassword = () => {
  return (
    <div className='flex flex-col w-full min-h-screen bg-custom-gray'>
      {/* Logo placed on the top left */}
      <div className="flex items-center justify-start p-4 m-4">
        <GiMagicLamp className="text-[#F37222] h-10 w-10 mr-2 p-1 rounded-full bg-opacity-5" />
        <span className="text-white font-bold">Eladdin AI</span>
      </div>

      {/* Centering the form and heading */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-2xl font-semibold text-white mb-4 text-center">Forgot Password</h1>
        <p className="text-white text-center text-opacity-[0.6]">Send a link to your email to recover your</p>
        <p className="mb-10 text-white text-center text-opacity-[0.6]">account password</p>

        <form className="flex flex-col items-center w-full">
        <div className="w-full mb-4 flex flex-col items-center">
          <label className="text-white mb-2 ml-3 w-3/5 md:w-2/5" htmlFor="email">E-mail</label>
          <div className="relative w-3/5 md:w-2/5 mb-4">
            <FaEnvelope className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
            <input
              type="email"
              id="email"
              placeholder="Enter Your E-mail"
              className="p-2 pl-10 border border-gray-500 rounded-full w-full bg-[#3A3A3A] text-white placeholder-gray-400"
            />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button type="submit" className="bg-[#FC6C04] text-white p-2 rounded-full w-3/5 md:w-2/5">
            Continue
          </button>
        </div>
      </form>
      

      
      </div>
    </div>
  );
};

export default ForgotPassword;

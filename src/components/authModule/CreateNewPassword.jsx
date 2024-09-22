import React , {useState} from 'react';
import { GiMagicLamp } from "react-icons/gi";
import { FaLock , FaEye, FaEyeSlash} from 'react-icons/fa';

const CreateNewPassword = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

  return (
    <div className='flex flex-col w-full min-h-screen bg-custom-gray justify-center items-center relative'>
      
      <div className="absolute top-0 left-0 flex items-center p-4 m-4">
        <GiMagicLamp className="text-[#F37222] h-10 w-10 mr-2 p-1 rounded-full bg-opacity-5" />
        <span className="text-white font-bold">Eladdin AI</span>
      </div>

      
      <div className="flex flex-col items-center justify-center w-full">
        
        <h1 className="text-2xl font-semibold text-white mb-10 text-center">Create Your New Password</h1>
        
        <form className="flex flex-col items-center w-full">
          <div className="w-full mb-4 flex flex-col items-center">
            <label className="text-white mb-2 ml-3 w-3/5 md:w-2/5" htmlFor="email">New Password</label>
            <div className="relative w-3/5 md:w-2/5 mb-4">
  <FaLock className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
  <input
    type={showPassword ? 'text' : 'password'}
    id="password"
    placeholder="Enter new Password"
    className="p-2 pl-10 pr-10 border border-gray-500 rounded-full w-full bg-[#3A3A3A] text-white placeholder-gray-400"
  />
  <span
    className="absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer text-gray-400"
    onClick={togglePasswordVisibility}
  >
    {showPassword ? <FaEyeSlash /> : <FaEye />}
  </span>
</div>

            <label className="text-white mb-2 ml-3 w-3/5 md:w-2/5" htmlFor="email">Confirm Password</label>
            <div className="relative w-3/5 md:w-2/5 mb-4">
  <FaLock className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
  <input
    type={showPassword ? 'text' : 'password'}
    id="password"
    placeholder="Confirm your Password"
    className="p-2 pl-10 pr-10 border border-gray-500 rounded-full w-full bg-[#3A3A3A] text-white placeholder-gray-400"
  />
  <span
    className="absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer text-gray-400"
    onClick={togglePasswordVisibility}
  >
    {showPassword ? <FaEyeSlash /> : <FaEye />}
  </span>
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

export default CreateNewPassword;

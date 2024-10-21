import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaSignOutAlt, FaSun, FaCloudSun, FaMoon, FaPlus, FaArrowRight, FaFileAlt, FaLink  } from 'react-icons/fa';
import { TbSettings2 } from 'react-icons/tb';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FiFilePlus } from 'react-icons/fi';
import { HiDownload } from "react-icons/hi";
import logo from '../images/mgl.png'
import Menu from '../navigation/Menu';
import backgroundImage from '../images/bgrnd.jpeg'


const CreateEBook2 = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [greeting, setGreeting] = useState('');
    const [greetingIcon, setGreetingIcon] = useState(null);
    const navigate = useNavigate();

    const getGreeting = () => {
        const now = new Date();
        const hours = now.getHours();
        let greetingMessage;
        let icon;

        if (hours >= 5 && hours < 12) {
            greetingMessage = "Good Morning";
            icon = <FaSun className='text-custom-orange' />;
        } else if (hours >= 12 && hours < 17) {
            greetingMessage = "Good Afternoon";
            icon = <FaCloudSun className='text-custom-orange' />;
        } else if (hours >= 17 && hours < 21) {
            greetingMessage = "Good Evening";
            icon = <FaMoon className='text-custom-orange' />;
        } else {
            greetingMessage = "Good Night";
            icon = <FaMoon className='text-custom-orange' />;
        }

        return { greetingMessage, icon };
    };

    useEffect(() => {
        const { greetingMessage, icon } = getGreeting();
        setGreeting(greetingMessage);
        setGreetingIcon(icon);
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    const handleOnClick = () => {
        navigate('/Dashboard');
    }
    return (
        <div className='w-full h-full min-h-screen bg-custom-gray flex'>
            <Menu />
            <div className='flex flex-col w-full bg-custom-gray p-4 rounded-e-3xl overflow-y-auto'>
                <div className='flex justify-between items-center lg:mt-4 mt-12 ml-4 lg:ml-12 mr-4 '>
                    <h1 className='font-rubik text-xl md:text-2xl font-medium leading-9 text-left text-white'>
                        Generate E-book
                    </h1>
                    <div className="flex items-center justify-center">
                        {/* E-Book Step (active) */}
                        <div className="flex flex-col items-center">
                            <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                                <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                            </div>
                            <span className="mt-2 text-sm text-white">E-Book</span>
                        </div>
                        <div className="w-16 h-0.5 bg-gray-400 mb-6"></div>

                        {/* Landing Page Step */}
                        <div className="flex flex-col items-center">
                            <div className="w-5 h-5 rounded-full border-2 border-white bg-gray-800"></div>
                            <span className="mt-2 text-sm text-gray-400">Landing Page</span>
                        </div>
                        <div className="w-16 h-0.5 bg-gray-400 mb-6"></div>

                        {/* Campaign Step */}
                        <div className="flex flex-col items-center">
                            <div className="w-5 h-5 rounded-full border-2 border-white bg-gray-800"></div>
                            <span className="mt-2 text-sm text-gray-400">Campaign</span>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='flex items-center cursor-pointer lg:mr-4 mr-1 md:mr-8' onClick={toggleDropdown}>
                            <div className='w-6 h-6 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center'>
                                <TbSettings2 className='lg:w-4 lg:h-4 w-3 h-3 text-custom-orange' />
                            </div>
                            <div className='w-6 h-6 md:w-10 md:h-10 bg-custom-orange rounded-full ml-1 md:ml-4'></div>
                            <div className='ml-2 md:ml-4 text-white flex flex-col'>
                                <div className='flex items-center'>
                                    <span className='text-custom-orange text-xs'>{greetingIcon}</span>
                                    <span className='text-xs text-custom-orange'>{greeting}</span>
                                </div>
                                <div className='flex items-center'>
                                    <span className='text-white font-rubik lg:text-lg text-sm lg:font-bold font-semibold'>
                                        William Pena
                                    </span>
                                    <RiArrowDropDownLine className='ml-1 text-3xl text-white' />
                                </div>
                            </div>
                        </div>
                        {isDropdownOpen && (
                            <div className='absolute right-0 mt-2 w-36 md:w-44 bg-gray-700 rounded-md shadow-lg z-10'>
                                <Link to="/profile" className='flex items-center p-1 lg:text-base text-sm text-white hover:bg-gray-600'>
                                    <FaUser className='mr-2' /> My Profile
                                </Link>
                                <Link to="/Dashboard" className='flex items-center p-1 lg:text-base text-sm text-white hover:bg-gray-600'>
                                    <FaSignOutAlt className='mr-2' /> Logout
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                <div className='flex w-full'>
                    <div className='flex flex-col mt-16 '>
                        <div
                            style={{ backgroundImage: `url(${backgroundImage})` }}
                            className="bg-contain bg-center " // Use Tailwind classes as needed
                        >
                            <div className="flex justify-between items-start bg-custom-gray px-4 py-4 rounded-t-xl mx-10 mt-8 border-b-2 border-custom-grayli">
                                {/* First div */}
                                <div className="relative lg:mt-4">
                                    <div className="bg-[#FF6600] w-12 h-10 rounded-2xl"></div>
                                    <div className="absolute left-2 bottom-0 w-8 h-8 bg-white rounded-t-lg rounded-b-md"></div>
                                </div>
                                {/* Second div */}
                                <div className='flex flex-col justify-start items-start lg:mt-3'>
                                    <h2 className="text-lg text-white">Entrepreneur Success 2024</h2>
                                    <p className="text-custom-grayli text-sm">Topic: Entrepreneurships</p>
                                </div>
                                <button className="flex items-center justify-center mt-3 text-white rounded-xl p-2 bg-white lg:ml-60 mr-0">
                                    <HiDownload className='text-black' />
                                </button>
                                <button className="flex items-center justify-center mt-3 text-white rounded-xl p-2 bg-black mr-0">
                                    <FaLink />
                                </button>
                                <button className="flex items-center justify-center mt-3 text-white rounded-3xl px-2 py-1 bg-custom-orange ">
                                    Next <FaArrowRight className='ml-2'/>
                                </button>
                            </div>
                        </div>


                        <div className=" bg-custom-gray rounded-lg px-14 pt-8">

                            <h3 className="text-lg text-white font-semibold mb-2">Why Entrepreneurs Should Care</h3>
                            <p className="text-gray-300 mb-4">
                                In today's fast-paced and technology-driven world, understanding and leveraging Artificial Intelligence (AI) has become crucial for entrepreneurs. Here’s why AI is so important for those looking to start or grow a business in 2024
                            </p>
                            <h4 className="text-md text-white font-semibold mb-2">1. Competitive Advantage</h4>
                            <p className="text-gray-300 mb-4">
                                AI technologies can provide a significant competitive edge. By integrating AI into business operations, entrepreneurs can enhance their products and services, optimize processes, and gain insights that are otherwise difficult to obtain. This can lead to more efficient operations, reduced costs, and better decision-making, allowing businesses to stay ahead of competitors who may not yet be leveraging AI.
                            </p>
                            <h4 className="text-md text-white font-semibold mb-2">2. Improved Efficiency</h4>
                            <p className="text-gray-300 mb-4">
                                AI opens the door to innovation by enabling the creation of new products and services that were previously unimaginable. For entrepreneurs, this means the opportunity to differentiate their offerings in the marketplace. Whether it’s developing an AI-powered app that personalizes user experiences or creating a machine learning model that predicts customer behavior, AI can help in crafting unique
                                solutions that stand out.
                            </p>
                            <h4 className="text-md text-white font-semibold mb-2">3. Enhanced Customer Experiences</h4>
                            <p className="text-gray-300 mb-4">
                                AI can transform customer interactions by providing personalized experiences and more efficient service. For example, AI-driven chatbots can handle customer inquiries.and more efficient service. For example, AI-driven chatbots can handle customer inquiries. and more efficient service. For example, AI-driven chatbots can handle customer inquiries.
                            </p>
                            <div className="mt-6 bg-custom-gray p-4 border-2 border-custom-grayli rounded-2xl flex items-center">
                                <div className="flex items-center">
                                    <img src={logo} alt='Logo' className='w-8 h-8 mr-4' />
                                </div>
                                <input
                                    type="text"
                                    className="flex-grow p-2 rounded-lg bg-custom-gray text-white placeholder-gray-500"
                                    placeholder="Create an E-book Entrepreneur wanting to get in ai industry in 2024"
                                />
                                <div className="flex items-center ml-4">
                                    <button className=" text-white p-1 rounded-full border-2 border-custom-grayli mr-2">
                                        <FaPlus />
                                    </button>
                                    <button className="bg-orange-500 text-white p-2 rounded-lg"
                                        onClick={handleOnClick}
                                    >
                                        <FaArrowRight />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="w-3/5 bg-[#292D32] p-4 ml-4 rounded-lg mt-14">
                        <div className='w-auto px-1 py-1 flex justify-center border-2 border-black shadow-custom-grayli bg-custom-gray rounded-xl mb-12 mt-8'>
                            <h3 className="text-lg font-semibold text-white">Book Pages</h3>
                        </div>

                        <div className="flex items-center p-2 rounded-lg mb-2 hover:bg-custom-grayli">
                            <div className='bg-black h-8 w-8 rounded flex justify-center p-2'><FaFileAlt className="text-white" /></div>
                            <p className="text-white text-sm ml-2">Cover Page</p>
                        </div>

                        <div className="flex items-center p-2 rounded-lg mb-2 hover:bg-custom-grayli">
                            <div className='bg-black h-8 w-8 rounded flex justify-center p-2'><FaFileAlt className="text-white" /></div>
                            <p className="text-white text-sm ml-2">Page 1</p>
                        </div>
                        <div className="flex items-center p-2 rounded-lg mb-2 hover:bg-custom-grayli">
                            <div className='bg-black h-8 w-8 rounded flex justify-center p-2'><FaFileAlt className="text-white" /></div>
                            <p className="text-white text-sm ml-2">Page 2</p>
                        </div>
                        <div className="flex items-center p-2 rounded-lg mb-2 hover:bg-custom-grayli">
                            <div className='bg-black h-8 w-8 rounded flex justify-center p-2'><FaFileAlt className="text-white" /></div>
                            <p className="text-white text-sm ml-2">Page 3</p>
                        </div>
                        <div className="flex items-center p-2 rounded-lg mb-2 hover:bg-custom-grayli">
                            <div className='bg-black h-8 w-8 rounded flex justify-center p-2'><FaFileAlt className="text-white" /></div>
                            <p className="text-white text-sm ml-2">Page 4</p>
                        </div>
                        <div className="flex items-center p-2 rounded-lg mb-2 hover:bg-custom-grayli">
                            <div className='bg-black h-8 w-8 rounded flex justify-center p-2'><FaFileAlt className="text-white" /></div>
                            <p className="text-white text-sm ml-2">Page 5</p>
                        </div>
                        <div className="flex items-center p-2 rounded-lg mb-2 hover:bg-custom-grayli">
                            <div className='bg-black h-8 w-8 rounded flex justify-center p-2'><FaFileAlt className="text-white" /></div>
                            <p className="text-white text-sm ml-2">Page 6</p>
                        </div>
                        <div className="flex items-center p-2 rounded-lg mb-2 hover:bg-custom-grayli">
                            <div className='bg-black h-8 w-8 rounded flex justify-center p-2'><FaFileAlt className="text-white" /></div>
                            <p className="text-white text-sm ml-2">Page 7</p>
                        </div>

                        <button type='submit' className="flex items-center w-full justify-center mt-4 text-white rounded-3xl p-2 border-2 border-custom-grayli "
                        >
                            Add New Page <FiFilePlus className='ml-2' />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CreateEBook2;

import React, { useState, useEffect } from 'react';
import { FaEllipsisH, FaUser, FaSignOutAlt, FaSearch } from 'react-icons/fa';
import Menu from '../navigation/Menu';
import { LuPenSquare } from "react-icons/lu";
import { IoCloudUploadOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbSettings2 } from "react-icons/tb";
import recentActivityData from './recentActivityData.json';
import { Link } from 'react-router-dom';
import { FaSun, FaCloudSun, FaMoon } from 'react-icons/fa';
import Audience from './Audience'; 
import BookTopic from './BookTopic'; // Import the BookTopic component

const Dashboard = () => {
    const [recentActivity, setRecentActivity] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [greeting, setGreeting] = useState('');
    const [greetingIcon, setGreetingIcon] = useState(null);
    const [popupStep, setPopupStep] = useState(null); // State for popup step

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

    useEffect(() => {
        setRecentActivity(recentActivityData);
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOpenPopup = () => {
        setPopupStep('audience'); // Show Audience popup
    };

    const handleClosePopup = () => {
        setPopupStep(null); // Close all popups
    };

    const handleNextPopup = () => {
        setPopupStep('bookTopic'); // Switch to BookTopic popup
    };
    return (
        <div className='w-full h-full min-h-screen bg-custom-gray flex'>
            <Menu />
            <div className='flex flex-col w-full bg-custom-gray p-4 rounded-e-3xl overflow-y-auto'>
                <div className='flex justify-between items-center lg:mt-4 mt-12 ml-4 md:ml-16 mr-4'>
                    <h1 className='font-rubik text-xl md:text-2xl font-medium leading-9 text-left text-white'>Dashboard</h1>
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
                                    <span className='text-white font-rubik lg:text-lg text-sm lg:font-bold font-semibold'>William Pena</span>
                                    <RiArrowDropDownLine className='ml-1 text-3xl text-white' />
                                </div>
                            </div>
                        </div>
                        {isDropdownOpen && (
                            <div className='absolute right-0 mt-2 w-36 md:w-44 bg-gray-700 rounded-md shadow-lg'>
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
                <div className='bg-custom-gray rounded-lg p-1 md:p-6 m-4'>
                    <div className='flex flex-col md:flex-row justify-between items-center mb-4'>
                        <div className='flex items-center relative w-full md:w-auto lg:mt-0 mt-12'>
                            <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-sm h-4 w-4' />
                            <input 
                                type='text' 
                                placeholder='Search For Ebooks...'
                                className='pl-10 p-3 rounded-xl bg-[#2F3236] text-white w-full md:w-[500px] border border-[#44494F]'
                            />
                        </div>
                        <div className='flex items-center mt-4 md:mt-0'>
                            <button
                                onClick={handleOpenPopup}  
                                className='text-white hover:underline lg:mr-4 mr-1 md:mr-6 flex text-sm items-center border-2 border-dashed border-custom-grayli lg:p-3 p-1 md:p-3 rounded-xl'>
                                <IoCloudUploadOutline className='mr-1 h-4 w-4' /> Upload E-Book
                            </button>
                            <Link to='/new-ebook' className='bg-custom-orange lg:p-3 p-1 md:p-3 rounded-xl text-white flex items-center'>
                                New E-Book <LuPenSquare className='lg:ml-2 ml-1' />
                            </Link>
                        </div>
                    </div>
                    <div className='mt-6 md:mt-14 bg-[#2F3236] lg:p-4 p-1 rounded-xl border border-[#575757]'>
                        <div className='flex justify-between items-center mb-6 mt-6'>
                            <h2 className='text-white text-lg md:text-xl'>Recent Activity</h2>
                            <button className='text-white hover:underline'>See All</button>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {recentActivity.map((activity, index) => (
                                <div
                                    key={index}
                                    className="relative w-full md:w-[233px] h-[182px] bg-[#2C3036] lg:p-2 rounded-xl text-white border border-[#454545] sm:overflow-hidden md:overflow-hidden"
                                >
                                    <div className="absolute top-6 right-2">
                                        <FaEllipsisH className="text-white" />
                                    </div>
                                    <div className="relative m-4">
                                        <div className="bg-[#FF6600] w-12 h-10 rounded-2xl"></div>
                                        <div className="absolute left-2 bottom-0 w-8 h-8 bg-white rounded-t-lg rounded-b-md"></div>
                                    </div>
                                    <h3 className="font-rubik lg:text-lg lg:font-medium text-left lg:ml-4 ml-1 lg:mt-4 mt-2">
                                        {activity.title}
                                    </h3>
                                    <p className="font-rubik text-[#A0A0A0] text-sm font-normal leading-[19.6px] text-left lg:ml-4 ml-1">
                                        {activity.category} • {activity.pages} Pages
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Render the popup conditionally */}
            {popupStep === 'audience' && (
                <Audience onClose={handleClosePopup} onNext={handleNextPopup} /> // Pass handleNextPopup to Audience
            )}
            {popupStep === 'bookTopic' && (
                <BookTopic onClose={handleClosePopup} /> // Render BookTopic popup when next is clicked
            )}
        </div>
    );
};

export default Dashboard;

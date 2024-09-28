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

const Dashboard = () => {
    const [recentActivity, setRecentActivity] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [greeting, setGreeting] = useState('');
    const [greetingIcon, setGreetingIcon] = useState(null);

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

    return (
        <div className='w-full h-full min-h-screen bg-custom-gray flex'>
            <Menu />
            <div className='flex flex-col w-full bg-custom-gray p-4 rounded-e-3xl overflow-y-auto'>
                <div className='flex justify-between items-center lg:mt-4 mt-12 ml-4 md:ml-16 mr-4'>
                    <h1 className='font-rubik text-xl md:text-2xl font-medium leading-9 text-left text-white'>Dashboard</h1>
                    <div className='relative'>
                        <div className='flex items-center cursor-pointer lg:mr-4 md:mr-8' onClick={toggleDropdown}>
                            <div className='w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center'>
                                <TbSettings2 className='w-4 h-4 text-custom-orange' />
                            </div>
                            <div className='w-8 h-8 md:w-10 md:h-10 bg-custom-orange rounded-full ml-2 md:ml-4'></div>
                            <div className='ml-2 md:ml-4 text-white flex flex-col'>
                                <div className='flex items-center'>
                                    <span className='text-custom-orange text-xs'>{greetingIcon}</span>
                                    <span className='text-xs text-custom-orange'>{greeting}</span>
                                </div>
                                <div className='flex items-center'>
                                    <span className='text-white font-rubik text-lg font-bold'>William Pena</span>
                                    <RiArrowDropDownLine className='ml-1 text-2xl text-white' />
                                </div>
                            </div>
                        </div>
                        {isDropdownOpen && (
                            <div className='absolute right-0 mt-2 w-36 md:w-44 bg-gray-700 rounded-md shadow-lg'>
                                <Link to="/profile" className='flex items-center p-1 text-white hover:bg-gray-600'>
                                    <FaUser className='mr-2' /> My Profile
                                </Link>
                                <Link to="/Dashboard" className='flex items-center p-1 text-white hover:bg-gray-600'>
                                    <FaSignOutAlt className='mr-2' /> Logout
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
                <div className='bg-custom-gray rounded-lg p-4 md:p-6 m-4'>
                    <div className='flex flex-col md:flex-row justify-between items-center mb-4'>
                        <div className='flex items-center relative w-full md:w-auto'>
                            <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-sm h-4 w-4' />
                            <input 
                                type='text' 
                                placeholder='Search For Ebooks...'
                                className='pl-10 p-3 rounded-xl bg-[#2F3236] text-white w-full md:w-[500px] border border-[#44494F]'
                            />
                        </div>
                        <div className='flex items-center mt-4 md:mt-0'>
                            <Link to='/upload-ebook' className='text-white hover:underline lg:mr-4 mr-1 md:mr-6 flex text-sm items-center border-2 border-dashed border-custom-grayli lg:p-2 p-1 md:p-3 rounded-xl'>
                                <IoCloudUploadOutline className='mr-1 h-4 w-4' /> Upload E-Book
                            </Link>
                            <Link to='/new-ebook' className='bg-custom-orange lg:p-2 p-1 md:p-3 rounded-xl text-white flex items-center'>
                                New E-Book <LuPenSquare className='lg:ml-2 ml-1' />
                            </Link>
                        </div>
                    </div>
                    <div className='mt-6 md:mt-14 bg-[#2F3236] lg:p-4  rounded-xl border border-[#575757]'>
                        <div className='flex justify-between items-center mb-6 mt-6'>
                            <h2 className='text-white text-lg md:text-xl'>Recent Activity</h2>
                            <button className='text-white hover:underline'>See All</button>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {recentActivity.map((activity, index) => (
                                <div
                                    key={index}
                                    className="relative w-full md:w-[233px] h-[182px] bg-[#2C3036] p-2 rounded-xl text-white border border-[#454545] sm:overflow-hidden md:overflow-hidden"
                                >
                                    <div className="absolute top-6 right-2">
                                        <FaEllipsisH className="text-white" />
                                    </div>
                                    <div className="relative m-4">
                                        <div className="bg-[#FF6600] w-12 h-10 rounded-2xl"></div>
                                        <div className="absolute left-2 bottom-0 w-9 h-8 bg-white rounded-t-lg rounded-b-md"></div>
                                    </div>
                                    <h3 className="font-rubik text-lg font-medium text-left ml-4 mt-4">
                                        {activity.title}
                                    </h3>
                                    <p className="font-rubik text-[#A0A0A0] text-sm font-normal leading-[19.6px] text-left ml-4">
                                        {activity.category} • {activity.pages} Pages
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

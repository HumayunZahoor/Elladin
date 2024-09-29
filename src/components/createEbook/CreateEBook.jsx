import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaSignOutAlt, FaSun, FaCloudSun, FaMoon } from 'react-icons/fa';
import { TbSettings2 } from 'react-icons/tb';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Menu from '../navigation/Menu';

const CreateEBook = () => {
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

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    return (
        <div className='w-full h-full min-h-screen bg-custom-gray flex'>
            <Menu />
            <div className='flex flex-col w-full bg-custom-gray p-4 rounded-e-3xl overflow-y-auto'>
                <div className='flex justify-between items-center lg:mt-4 mt-12 ml-4 md:ml-16 mr-4'>
                    <h1 className='font-rubik text-xl md:text-2xl font-medium leading-9 text-left text-white'>Generate E-book</h1>
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
            </div>
        </div>
    );
}

export default CreateEBook;

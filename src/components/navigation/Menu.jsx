import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GiMagicLamp } from 'react-icons/gi';
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { CiHome } from "react-icons/ci";
import { BiBook, BiCreditCard } from "react-icons/bi";
import { BsCloudCheck } from "react-icons/bs";
import { GiBookCover } from "react-icons/gi";
import { GrGroup } from "react-icons/gr";
import pattern1 from '../images/top.png';
import pattern2 from '../images/rigbtm.png';
import pattern3 from '../images/leftbtm.png';
import logo from '../images/mgl.png';

const Menu = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    return (
        <div className="w-/5 h-fit bg-[#3A3E44] p-4 flex flex-col justify-between relative rounded-s-3xl">
            {/* Background patterns */}
            <img 
                src={pattern1} 
                alt="Top left pattern" 
                className="absolute top-0 left-0 w-[100px] h-[100px] opacity-70" 
            />
            <img 
                src={pattern2} 
                alt="Bottom right pattern" 
                className="absolute bottom-4 right-0 w-[160px] h-[220px] opacity-80" 
            />
            <img 
                src={pattern3} 
                alt="Bottom left pattern" 
                className="absolute bottom-0 left-0 w-[100px] h-[100px] opacity-70" 
            />

            {/* Menu content */}
            <div className="flex flex-col items-start">
                <div className="flex items-center justify-start mb-6 mt-6">
                    <img src={logo} alt='logo' className="text-[#FC6C04] h-8 w-8" />
                    <h1 className="text-white text-lg font-semibold ml-2">Elladin AI</h1>
                </div>

                <ul className="flex flex-col justify-center gap-4 pt-1">
                    <li>
                        <Link
                            to="/Dashboard"
                            className={`text-white flex items-center gap-3 px-3 py-2 w-full rounded-xl ${activeLink === '/Dashboard' ? 'bg-[#FC6C04]' : 'hover:bg-gray-600'}`}
                            onClick={() => setActiveLink('/Dashboard')}
                        >
                            <CiHome className="text-xl" /> Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/EBook"
                            className={`text-white flex items-center gap-3 px-3 py-2 w-full rounded-xl ${activeLink === '/EBook' ? 'bg-[#FC6C04]' : 'hover:bg-gray-600'}`}
                            onClick={() => setActiveLink('/EBook')}
                        >
                            <BiBook className="text-xl" /> E-books
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/CoverTemplates"
                            className={`text-white flex items-center gap-3 px-3 py-2 w-full rounded-xl ${activeLink === '/CoverTemplates' ? 'bg-[#FC6C04]' : 'hover:bg-gray-600'}`}
                            onClick={() => setActiveLink('/CoverTemplates')}
                        >
                            <GiBookCover className="text-xl" /> Cover Templates
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Payments"
                            className={`text-white flex items-center gap-3 px-3 py-2 w-full rounded-xl ${activeLink === '/Payments' ? 'bg-[#FC6C04]' : 'hover:bg-gray-600'}`}
                            onClick={() => setActiveLink('/Payments')}
                        >
                            <BiCreditCard className="text-xl" /> Payments
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Api"
                            className={`text-white flex items-center gap-3 px-3 py-2 w-full rounded-xl ${activeLink === '/Api' ? 'bg-[#FC6C04]' : 'hover:bg-gray-600'}`}
                            onClick={() => setActiveLink('/Api')}
                        >
                            <BsCloudCheck className="text-xl" /> API's
                        </Link>
                    </li>
                </ul>

                <hr className="my-12 border-white w-full border-opacity-5" />
                <div className="w-full">
                    <Link
                        to="/HelpSupport"
                        className={`text-white flex items-center gap-3 px-3 py-2 w-full rounded-xl ${activeLink === '/HelpSupport' ? 'bg-[#FC6C04]' : 'hover:bg-gray-600'}`}
                        onClick={() => setActiveLink('/HelpSupport')}
                    >
                        <GrGroup className="text-xl" /> Help & Support
                    </Link>
                </div>
            </div>

            {/* Unlock Premium Section */}
            <div className="relative mt-20 mb-2 p-2 bg-white rounded-xl text-center w-full">
                <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2">
                    <div className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center border-2 border-[#FC6C04]">
                        <HiMiniRocketLaunch className="text-[#FC6C04] text-3xl" />
                    </div>
                </div>
                <h2 className="text-black mt-8 text-lg font-semibold">Unlock Premium Features</h2>
                <button className="mt-4 py-1 px-4 bg-[#FC6C04] text-white rounded-xl hover:bg-[#e65a03] text-lg font-semibold">
                    Upgrade Plan
                </button>
            </div>
        </div>
    );
};

export default Menu;

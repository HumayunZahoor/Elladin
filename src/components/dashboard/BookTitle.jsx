import React, { useState } from 'react';
import logo from '../images/mgl.png';
import '../customStyling/custom.css';
import { useNavigate } from 'react-router-dom';

const BookTitle = ({ onClose, onBack }) => {
    const [bookTitle, setBookTitle] = useState('');
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate("/CreateEBook")
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="relative bg-[#2F3236] lg:w-[700px] lg:h-[450px] w-[70%] h-[70%] rounded-3xl p-6 flex flex-col">
                
                {/* Top section with logo and close button */}
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center">
                        <img src={logo} alt="logo" className="h-8 w-8" />
                        <h1 className="text-white text-lg font-semibold ml-2">Elladin AI</h1>
                    </div>
                    <button
                        className="h-6 w-6 text-lg text-white font-semibold"
                        onClick={onClose}
                    >
                        X
                    </button>
                </div>
                
                {/* Form section with headings and input */}
                <h4 className="text-custom-grayli text-sm font-bold text-left mb-2">Tell me about book</h4>
                <h2 className="text-white text-base font-bold mb-4 text-left">Enter your Book Title</h2>
                <h4 className="text-custom-orange text-sm font-bold text-left mb-4">Book Title</h4>
                
                {/* Input for adding book title */}
                <div className="w-full flex flex-wrap items-center bg-[#292C30] border border-[#575757] rounded-xl p-2 mb-5">
                    <input
                        className="bg-custom-gray outline-none text-base text-white ml-2 mr-2 overflow-hidden flex-grow"
                        type="text"
                        placeholder="Type Here"
                        value={bookTitle}
                        onChange={(e) => setBookTitle(e.target.value)}
                    />
                </div>
                <h4 className="text-custom-orange text-sm font-bold text-left mb-2">Here are some suggestions for titles</h4>
    
                <div className="flex items-center mb-1">
                    <input type="checkbox" id="option1" className="custom-checkbox mr-2" />
                    <p className="lg:text-sm text-xs font-medium text-white">Entrepreneur Success 2024</p>
                </div>
            
                <div className="flex items-center mb-1">
                    <input type="checkbox" id="option2" className="custom-checkbox mr-2" />
                    <p className="lg:text-sm text-xs font-medium text-white">Winning Strategies for Entrepreneurs in 2024</p>
                </div>
            
                <div className="flex items-center mb-1">
                    <input type="checkbox" id="option3" className="custom-checkbox mr-2" />
                    <p className="lg:text-sm text-xs font-medium text-white">Mastering Success in 2024 and Beyond</p>
                </div>
                
                {/* Buttons section, aligned to the right */}
                <div className="flex justify-end w-full lg:mt-6 mt-2 lg:mb-0 mb-1">
                    <button
                        className="bg-white text-[#2F3236] rounded-xl lg:py-2 lg:px-8 py-1 px-4 lg:mr-4 mr-2"
                        onClick={onBack}
                    >
                        Back
                    </button>
                    <button 
                        className="bg-custom-orange text-white rounded-xl lg:py-2 lg:px-8 py-1 px-4"
                        onClick={handleOnClick}
                    >
                        Start Create
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookTitle;

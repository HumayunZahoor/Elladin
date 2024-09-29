import React, { useState } from 'react';
import logo from '../images/mgl.png';

const BookTopic = ({ onClose, onNext, onBack }) => { 

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="relative bg-[#2F3236] lg:w-[700px] lg:h-[450px] w-[70%] h-[70%] rounded-3xl p-6 flex flex-col">
                
                {/* Top section with logo and close button */}
                <div className="flex justify-between items-center mb-16">
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
                <h4 className="text-custom-grayli text-sm font-bold text-left mb-4">Tell me about book</h4>
                <h2 className="text-white text-base font-bold mb-8 text-left">Enter your topic or niche</h2>
                <h4 className="text-custom-orange text-sm font-bold text-left mb-4">Topic or Niche</h4>
                
                {/* Input for adding audiences */}
                <div className="w-full flex flex-wrap items-center bg-[#292C30] border border-[#575757] rounded-xl p-2 mb-6">
                   
                    <input
                        className="bg-[#292C30] outline-none text-white ml-2 flex-grow"
                        type="text"
                        placeholder="Entrepreneurship"
                       
                    />
                </div>
                
                {/* Buttons section, aligned to the right */}
                <div className="flex justify-end w-full mt-8 ">
                    <button
                        className="bg-white text-[#2F3236] rounded-xl lg:py-2 lg:px-8 py-1 px-4 lg:mr-4 mr-2"
                        onClick={onBack} 
                    >
                        Back
                    </button>
                    <button 
                        className="bg-custom-orange text-white rounded-xl lg:py-2 lg:px-8 py-1 px-4"
                        onClick={onNext} 
                        >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookTopic;

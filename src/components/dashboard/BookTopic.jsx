import React from 'react';
import logo from '../images/mgl.png';

const BookTopic = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="relative bg-[#2F3236] w-[700px] h-[450px] rounded-3xl p-6 flex flex-col">
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
                <h2 className="text-white text-base mb-8 text-left">What's the main topic of your book?</h2>
                {/* Add your form elements for book topic here */}
                <div className="mt-6">
                    <button
                        className="bg-custom-grayli text-white py-2 px-4 rounded-xl"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookTopic;

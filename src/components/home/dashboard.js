import React from 'react';

import Vector from "../../assets/vector.svg";
import Vector1 from "../../assets/vector1.svg";
import Vector2 from "../../assets/vector2.svg";
import EmojiSad from "../../assets/emojisad.svg";
import EmojiNormal from "../../assets/emojinormal.svg";
import EmojiHappy from "../../assets/emojihappy.svg";

const Dashboard = () => {
    return (
        <>
            <div className="w-full mt-8">

                <div className="w-full md:flex mx-8">


                    <div className="px-14 flex-1 pt-14">

                    </div>

                    <div className="relative overflow-hidden md:flex w-1/4 bg-white justify-between items-center hidden">
                        <button className="absolute w-36 h-8 bottom-14 left-3 top-4 right-8 bg-neutral-700 ml-8 mr-12 text-white">
                            <span className="text-2xl mr-1"></span> <strong> Total Tiket</strong>
                        </button>
                        <div className="bg-bg-black-card rounded-2xl w-56 h-56 flex items-center justify-center">
                            <span className="text-6xl font-bold text-white">0</span>
                        </div>
                        <img className="absolute h-20 w-69 bottom-0 left-0 rounded-2xl right-0" src={Vector2} alt="logo" />
                        <img className="absolute h-16 w-49 bottom-0 left-0 rounded-2xl right-0" src={Vector1} alt="logo" />
                        <img className="absolute h-14 w-39 bottom-0 left-0 rounded-2xl right-0" src={Vector} alt="logo" />
                    </div>

                    <div className="relative overflow-hidden md:flex w-1/4 bg-white justify-between items-center hidden">
                        <button className="absolute w-36 h-8 bottom-14 left-3 top-4 right-8 bg-red-500 ml-8 mr-12 text-white rounded-xl hover:bg-white-100">
                            <img className="absolute w-5 h-5 bottom-1 left-3 right-2" src={EmojiSad} alt="logo" />
                            <span className="text-2xl mr-5"></span>
                            <strong> Ticket Open</strong>
                        </button>
                        <div className="bg-bg-red-card rounded-2xl w-56 h-56 flex items-center justify-center">
                            <span className="text-6xl font-bold text-white">0</span>
                        </div>
                        <button className="absolute w-56 h-14 bottom-0 rounded-b-lg left-0 right-0 bg-gray-50"></button>
                        <button className="absolute w-32 h-8 left-12 bottom-3 rounded-lg left-0 right-0 bg-red-500 rounded-xl hover:bg-red-600">
                            <span className="font-semibold text-xs leading-6 text-slate-50">Detail</span>
                        </button>
                    </div>
                    <div className="relative overflow-hidden md:flex w-1/4 bg-white justify-between items-center hidden">
                        <button className="absolute w-36 h-8 bottom-14 left-3 top-4 right-8 bg-yellow-600 ml-8 mr-12 text-white rounded-xl hover:bg-white-100">
                            <img className="absolute w-5 h-5 bottom-1 left-3 right-2" src={EmojiNormal} alt="logo" />
                            <span className="text-2xl mr-6"></span>
                            <strong> On Progress</strong>
                        </button>
                        <div className="bg-bg-yellow-card rounded-2xl w-56 h-56 flex items-center justify-center">
                            <span className="text-6xl font-bold text-white">0</span>
                        </div>
                        <button className="absolute w-56 h-14 bottom-0 rounded-b-lg left-0 right-0 bg-gray-50">
                        </button>
                        <button className="absolute w-32 h-8 left-12  bottom-3 rounded-lg left-0 right-0 bg-yellow-600 rounded-xl hover:bg-yellow-700">
                            <span className="font-semibold text-xs leading-6 text-slate-50">Detail</span>
                        </button>

                    </div>
                    <div className="relative overflow-hidden md:flex w-1/4 bg-white justify-between items-center hidden">
                        <button className="absolute w-18 h-8 bottom-14 left-2 top-4 right-10 bg-blue-500 ml-10 mr-14 text-white rounded-xl hover:bg-white-100">
                            <img className="absolute w-5 h-5 bottom-1 left-5 right-2" src={EmojiHappy} alt="logo" />
                            <span className="text-2xl mr-4"></span> <strong> Solved</strong>
                        </button>
                        <div className="bg-bg-blue-card rounded-2xl w-56 h-56 flex items-center justify-center">
                            <span className="text-6xl font-bold text-white">0</span>
                        </div>
                        <button className="absolute w-56 h-14 bottom-0 rounded-b-lg left-0 right-0 bg-gray-50">
                        </button>
                        <button className="absolute w-32 h-8 left-12  bottom-3 rounded-lg left-0 right-0 bg-blue-500 rounded-xl hover:bg-blue-600">
                            <span className="font-semibold text-xs leading-6 text-slate-50">Detail</span>
                        </button>

                        <div className="relative self-start">
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Dashboard;
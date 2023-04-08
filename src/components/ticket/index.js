import React, { useContext, useEffect } from 'react'
import Header from "../../template/header";
import IcCreateUser from "../../assets/ic_create_user.svg";
import ArrowLeft from "../../assets/arrowleft2.svg";
import ArrowDown from "../../assets/arrow_down.svg";
import Calender from "../../assets/calendar.png";
import { useNavigate } from "react-router-dom";

export default function CreateTicket() {

    const history = useNavigate();

    function backToHome() {
        history('/');
    }

    return (
        <section>
            <Header />
            <div className="h-screen md:flex">

                <div className="w-full p-8">

                    <div className="relative self-start overflow-hidden md:flex flex-1 bg-white justify-around items-center">

                        <div className="flex items-left w-full">
                            <div className="mr-2 bg-sky-700 rounded-xl p-2"
                                onClick={backToHome}
                            >
                                <img className="max-w-lg" src={ArrowLeft} alt="back" />
                            </div>
                            <div className="flex items-center justify-center">
                                <p className="text-gray-800 font-medium ml-2 text-black font-bold text-2xl">Create
                                    Ticket</p>
                            </div>
                        </div>

                    </div>

                    <div className="w-full p-12">

                        <div className="mb-4 w-full">
                            <label className="block text-grey-darker text-sm mb-2" htmlFor="lbCs">
                                Date
                            </label>
                            <div className="relative">
                                <input
                                    type="date"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="txtDate"
                                    placeholder="Date/Month/Years"
                                    name="txtDate"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <img className="max-w-lg" src={Calender} alt="back" />
                                </div>
                            </div>
                        </div>

                        <div className="mb-4 w-full">
                            <label className="block text-grey-darker text-sm mb-2" htmlFor="lbCs">
                                CS Name
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="txtCs"
                                    placeholder="CS"
                                    name="txtCs"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <img className="max-w-lg" src={ArrowDown} alt="arrowDown" />
                                </div>
                            </div>
                        </div>

                        <div className="mb-4 w-full">
                            <label className="block text-grey-darker text-sm mb-2" htmlFor="lbTitleTask">
                                Tittle Task
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="txtTitleTask"
                                    placeholder="Title Task"
                                    name="txtTitleTask"
                                />
                            </div>
                        </div>

                        <div className="mb-4 w-full">
                            <label className="block text-grey-darker text-sm mb-2" htmlFor="lbTaskDesc">
                                Task Description
                            </label>
                            <div className="relative">
                                <textarea
                                    className="form-textarea block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="txtTaskDesc"
                                    placeholder="Description Task"
                                    name="txtTaskDesc"
                                    rows="4"
                                ></textarea>
                            </div>
                        </div>

                        <div className="mb-4 w-full">
                            <label className="block text-grey-darker text-sm mb-2" htmlFor="lbAssignTask">
                                Assign
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="txtAssignTask"
                                    placeholder="Assign To"
                                    name="txtAssignTask"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <img className="max-w-lg" src={ArrowDown} alt="arrowDown" />
                                </div>
                            </div>
                        </div>

                        <div className="mb-4 w-full">
                            <label className="block text-grey-darker text-sm mb-2" htmlFor="lbTaskPriority">
                                Task Priority
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="txtTaskPriority"
                                    placeholder="Priority"
                                    name="txtTaskPriority"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <img className="max-w-lg" src={ArrowDown} alt="arrowDown" />
                                </div>
                            </div>
                        </div>

                        <div className="mb-4 w-full flex justify-end">
                            <button
                                className="py-2 px-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600">
                                <span className="text-2xl mr-3">+</span> <strong>Add Ticket</strong>
                            </button>

                        </div>

                    </div>

                </div>

                <div className="flex w-421 justify-left items-center border-l">

                    <div className="relative self-start">
                        <img className="max-w-lg" src={IcCreateUser} alt="logo" />

                        <p className="text-base text-3xl font-semi-bold mb-6 text-center">make your ticket for better komerce</p>
                    </div>

                </div>
            </div>
        </section>

    )
}
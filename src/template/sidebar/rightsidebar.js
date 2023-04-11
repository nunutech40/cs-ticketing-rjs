import React, { useState } from 'react'
import Avatar from "../../assets/avatar.svg";
import ICClose from "../../assets/close-circle.svg";
import { icons } from "react-icons";

export default function RightSidebar({ isSidebarVisible, toggleSidebar, userProfile, onSignoutClick }) {

    const selectRole = ["CS", "TECH"];

    const [formData, setFormData] = useState({
        fullname: userProfile.name,
        role: userProfile.role,
        photoprofile: "",
    });

    return (
        isSidebarVisible && (
            <div className="fixed inset-y-0 right-0 w-80 h-screen bg-white transition-all duration-300 ease-in-out z-50 shadow-xl">
                {/* Sidebar content */}
                <div className="flex flex-col h-full p-4">
                    <div className="flex flex-col items-center mt-8 my-4">
                        <div className="w-full justify-start ml-8">
                            <label htmlFor="position" className="block text-gray-700 mb-4">Profile</label>
                        </div>
                        <div className="flex items-center justify-center w-full">
                            <div className="flex items-center w-full">
                                <img className="h-16 w-16 ml-4 mr-4" src={Avatar} alt="logo" />
                                <button className="bg-blue-500 hover:bg-blue-700 w-full mr-4 rounded-xl text-white font-bold py-2 px-4 rounded">
                                    Upload Profile
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className="mb-4 max-w-sm">
                        <label className="block text-grey-darker text-sm mb-2" htmlFor="username">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="fullname"
                            placeholder="Full Name"
                            name="fullname"
                            value={userProfile.name}
                            onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                        />
                    </div>
                    <div className="my-4">
                        <label className="block text-grey-darker text-sm mb-2" htmlFor="username">
                            Position
                        </label>
                        <select
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="position"
                            defaultValue={userProfile.role}
                        >
                            {selectRole.map((role, index) => (
                                <option key={index} value={role.toUpperCase()}>
                                    {role}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Sign Out button */}
                    <button onClick={onSignoutClick}
                        className="bg-red-500 hover:bg-red-700 text-white rounded-t-lg rounded-b-lg font-bold py-2 px-4 rounded mb-4 mt-auto">
                        Sign Out
                    </button>
                </div>

                {/* Close button */}
                <button
                    onClick={toggleSidebar}
                    className="absolute top-0 right-0 mt-4 mr-4 rounded-2xl text-gray-500 hover:text-gray-700"
                >
                    <img src={ICClose} alt="logo" />
                </button>
            </div>
        )
    );
}

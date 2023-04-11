import React from "react";

export default function RightSidebar({ isSidebarVisible, toggleSidebar, userProfile, onSignoutClick }) {

    return (
        isSidebarVisible && (
            <div className="fixed inset-y-0 right-0 w-64 h-screen bg-white transition-all duration-300 ease-in-out z-50 shadow-xl">
                {/* Sidebar content */}
                <div className="flex flex-col h-full p-4">
                    <h1 className="text-xl font-bold">Sidebar</h1>
                    {/* Add your sidebar items here */}
                    <div className="flex items-center my-4">
                        <img className="h-20 w-20 rounded-full mr-4" src={userProfile.photoURL} alt="Profile" />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Upload
                        </button>
                    </div>
                    <div className="my-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" value={userProfile.name} />
                    </div>
                    <div className="my-4">
                        <label htmlFor="position" className="block text-gray-700 font-bold mb-2">Position:</label>
                        <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="position" value={userProfile.position}>
                            <option value="CS">CS</option>
                            <option value="TECH">TECH</option>
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
                    X
                </button>
            </div>
        )
    );
}

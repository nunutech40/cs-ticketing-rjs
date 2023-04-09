import React, { useContext, useEffect, useState } from 'react'
import IcCreateUser from "../../assets/ic_create_user.svg";
import ArrowLeft from "../../assets/arrowleft2.svg";
import ArrowDown from "../../assets/arrow_down.svg";
import Calender from "../../assets/calendar.png";
import { Link, Navigate } from "react-router-dom";
import API_BASE_URL from '../../config/config';
import { AuthContext } from '../../App';
import axios from 'axios';

export default function CreateTicket() {

    const { state } = useContext(AuthContext);
    const [userTech, setUserTech] = useState([]);
    const [loading, setLoading] = useState(true);

    const [formData, setFormData] = useState({
        date: "",
        title: "",
        description: "",
        assignee: "",
        priority: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic for creating a ticket here
        var token = localStorage.getItem('token');
        token = token.replace(/"/g, '');

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        };

        axios
            .post(API_BASE_URL + "tickets", formData, config)
            .then((response) => {
                if (response.data.status === "success") {
                    // Handle the success, e.g., navigate to another page or show a success message
                } else {
                    // Handle the error, e.g., show an error message
                }
            })
            .catch((error) => {
                // Handle the error, e.g., show an error message
            });
    }


    useEffect(() => {
        var token = localStorage.getItem('token');
        token = token.replace(/"/g, '');

        if (token) {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            axios.get(API_BASE_URL + 'users?role=tech', config)

                .then((response) => {
                    if (response.data.status === "success") {
                        setUserTech(response.data.data);
                    }
                    state.isAuthenticated = true;
                })
                .catch((error) => {
                    if (error.response && error.response.status === 401) {
                        localStorage.removeItem('token');
                        state.isAuthenticated = false;
                    } else {
                        console.log(error);
                    }
                });

        } else {
            state.isAuthenticated = false;
        }

        setLoading(false)
    }, []);


    if (!state.isAuthenticated) {
        return <Navigate to="/login" />
    }

    if (loading) {
        return <div>Loading...</div>;
    }


    return (
        <section>
            <div className="h-screen md:flex">

                <div className="w-full p-8">

                    <div className="relative self-start overflow-hidden md:flex flex-1 bg-white justify-around items-center">

                        <div className="flex items-left w-full">
                            <Link to="/" className="mr-2 bg-sky-700 rounded-xl p-2">
                                <img className="max-w-lg" src={ArrowLeft} alt="back" />
                            </Link>
                            <div className="flex items-center justify-center">
                                <p className="text-gray-800 font-medium ml-2 text-black font-bold text-2xl">Create
                                    Ticket</p>
                            </div>
                        </div>

                    </div>

                    <div className="w-full p-12">

                        <form onSubmit={handleSubmit}>

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
                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <img className="max-w-lg" src={Calender} alt="back" />
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
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
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
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    ></textarea>
                                </div>
                            </div>

                            <div className="mb-4 w-full">
                                <label className="block text-grey-darker text-sm mb-2" htmlFor="lbCs">
                                    Assign
                                </label>
                                <div className="relative">
                                    <select
                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="txtCs"
                                        name="txtCs"
                                        onChange={(e) => setFormData({ ...formData, assignee: e.target.value })}
                                    >
                                        {userTech.map((tech) => (
                                            <option key={tech.id} value={tech.id}>
                                                {tech.name}
                                            </option>
                                        ))}

                                    </select>
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
                                        onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
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

                        </form>

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
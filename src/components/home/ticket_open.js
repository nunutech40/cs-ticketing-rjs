import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../App';
import API_BASE_URL from '../../config/config';
import axios from 'axios';
import NoPriorityIcon from "../../assets/no-priority.svg"
import LowPriorityIcon from "../../assets/low-priority.svg"
import MediumPriorityIcon from "../../assets/medium-priority.svg"
import HighPriorityIcon from "../../assets/high-priority.svg"
import ICClose from "../../assets/close-circle.svg";

const TicketOpen = () => {

    const { state } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const userProfile = JSON.parse(localStorage.getItem('profile'))
    const [showPopup, setShowPopup] = useState(false);
    const [selectedId, setSelectedId] = useState('');

    const [formData, setFormData] = useState({
        assigned_to: userProfile.id,
        status: "belum_di_proses",
    });
    

    function renderPriority(priority) {
        if (priority === "no priority") {
            return <img src={NoPriorityIcon} alt="No Priority" />;
        } else if (priority === "low") {
            return <img src={LowPriorityIcon} alt="Low Priority" />;
        } else if (priority === "medium") {
            return <img src={MediumPriorityIcon} alt="Medium Priority" />;
        } else {
            return <img src={HighPriorityIcon} alt="High Priority" />;
        }
    }

    function handlePriorityClick(id) {
        setSelectedId(id);
        setShowPopup(true);
    }

    function handleMenuItemClick(priority) {
        console.log(`cek priority: ${priority}`)
        updatePriority(priority, selectedId);
    }

    const [tickets, setTickets] = useState([]);

    useEffect(() => {

        var token = localStorage.getItem('token');
        token = token.replace(/"/g, '');

        if (token) {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            axios.post(API_BASE_URL + 'tickets/', formData, config)

                .then((response) => {
                    if (response.data.status === "success") {
                        var data = response.data.data
                        setTickets(data);
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


    const updatePriority = (priority, id) => {
        var token = localStorage.getItem('token');
        token = token.replace(/"/g, '');

        const updateData = {
            priority: priority,
        };

        if (token) {
            const config = {
                headers: {  
                    Authorization: `Bearer ${token}`,
                },
            };
            axios.put(API_BASE_URL + 'tickets/update/' + id, updateData, config)

                .then((response) => {
                    if (response.data.status === "success") {
                        var data = response.data.data
                        window.location.reload()
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
    };

    
    return (
        <>
            <div className="relative min-w-full table-auto">
                <table className="w-full">
                    <thead className="bg-gray-300 text-gray-700">
                        <tr>
                            <th className="text-left px-4 py-2">Tanggal</th>
                            <th className="text-left px-4 py-2">CS</th>
                            <th className="text-left px-4 py-2">Task</th>
                            <th className="text-left px-4 py-2">Assign To</th>
                            <th className="text-left px-4 py-2">Priority</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {tickets.map((row, index) => (
                            <tr key={index} className="border-b border-gray-200">
                                <td className="px-4 py-2">{"12-12-2022"}</td>
                                <td className="px-4 py-2">{row.updated_by_name}</td>
                                <td className="px-4 py-2">{row.title}</td>
                                <td className="px-4 py-2">{row.assigned_to_name}</td>
                                <td
                                    className="px-4 py-2"
                                    onClick={() => handlePriorityClick(row.id)}
                                >
                                    {renderPriority(row.priority)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    {showPopup && (
                        <div
                            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                            onClick={() => setShowPopup(false)}
                        >

                            <div className="bg-white p-2 rounded-lg shadow-md">
                                <div className="flex justify-end">
                                    <img src={ICClose} alt="logo" />
                                </div>

                                <ul className="space-y-2">
                                    <li>
                                        <button
                                            className="text-left w-full px-4 py-2 hover:bg-gray-100 rounded"
                                            onClick={() => handleMenuItemClick("no priority")}
                                        >
                                            No Priority
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="text-left w-full px-4 py-2 hover:bg-gray-100 rounded"
                                            onClick={() => handleMenuItemClick("low")}
                                        >
                                            Low Priority
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="text-left w-full px-4 py-2 hover:bg-gray-100 rounded"
                                            onClick={() => handleMenuItemClick("medium")}
                                        >
                                            Medium Priority
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="text-left w-full px-4 py-2 hover:bg-gray-100 rounded"
                                            onClick={() => handleMenuItemClick("high")}
                                        >
                                            High Priority
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </table>
            </div>

        </>
    )
}

export default TicketOpen;


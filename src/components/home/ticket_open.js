import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../App';
import API_BASE_URL from '../../config/config';
import axios from 'axios';
import NoPriorityIcon from "../../assets/no-priority.svg"
import LowPriorityIcon from "../../assets/low-priority.svg"
import MediumPriorityIcon from "../../assets/medium-priority.svg"
import HighPriorityIcon from "../../assets/high-priority.svg"
import ICClose from "../../assets/close-circle.svg";
import ElipsisIC from "../../assets/icons8-ellipsis-48.png";
import PriorityPopup from './menu/PriorityPopup';
import PopUpStatusMenu from './menu/TicketStatusPopUp';


const TicketOpen = () => {

    const { state } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const userProfile = JSON.parse(localStorage.getItem('profile'))
    const [showPopup, setShowPopup] = useState(false);
    const [selectedId, setSelectedId] = useState('');
    const [showPopupStatus, setShowPopupStatus] = useState(false);

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
    function handleStatusClick(id) {
        setSelectedId(id);
        setShowPopupStatus(true);
    }

    function handleMenuItemClick(priority) {
        updatePriority(priority, selectedId);
    }
    function handleMenuItemClickStatus(status) {
        updateStatus(status, selectedId);
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

    const updateStatus = (status, ticketid) => {
        var token = localStorage.getItem('token');
        token = token.replace(/"/g, '');

        const updateData = {
            status: status,
        };

        if (token) {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            axios.put(API_BASE_URL + 'tickets/update/status/' + ticketid, updateData, config)

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
    }

    const updatePriority = (priority, ticketid) => {
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
            axios.put(API_BASE_URL + 'tickets/update/priority/' + ticketid, updateData, config)

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
                            <th className="text-left px-4 py-2"></th>
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
                                <td
                                    className="px-4 py-2"
                                    onClick={() => handleStatusClick(row.id)}
                                >
                                    <img src={ElipsisIC} alt="logo" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    {<PriorityPopup
                        show={showPopup}
                        onClose={() => setShowPopup(false)}
                        handleMenuItemClick={handleMenuItemClick}
                    />}
                    {<PopUpStatusMenu
                        show={showPopupStatus}
                        onClose={() => setShowPopupStatus(false)}
                        handleMenuItemClick={handleMenuItemClickStatus}
                    />}
                </table>
            </div>

        </>
    )
}

export default TicketOpen;


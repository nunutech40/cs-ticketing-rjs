import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../App';
import API_BASE_URL from '../../config/config';
import axios from 'axios';
import NoPriorityIcon from "../../assets/no-priority.svg"
import LowPriorityIcon from "../../assets/low-priority.svg"
import MediumPriorityIcon from "../../assets/medium-priority.svg"
import HighPriorityIcon from "../../assets/high-priority.svg"

const TicketOpen = () => {

    const { state } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const userProfile = JSON.parse(localStorage.getItem('profile'))

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


    return (
        <>
            <table className="min-w-full table-auto">
                <thead className="bg-gray-300 text-gray-700">
                    <tr>
                        <th className="text-left px-4 py-2">Tanggal</th>
                        <th className="text-left px-4 py-2">CS</th>
                        <th className="text-left px-4 py-2">Task</th>
                        <th className="text-left px-4 py-2">Assign</th>
                        <th className="text-left px-4 py-2">Priority</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {tickets.map((row, index) => (
                        <tr key={index} className="border-b border-gray-200">
                            <td className="px-4 py-2">{"12-12-2022"}</td>
                            <td className="px-4 py-2">{row.created_by}</td>
                            <td className="px-4 py-2">{row.title}</td>
                            <td className="px-4 py-2">{row.assigned_to}</td>
                            <td className="px-4 py-2">
                                {renderPriority(row.priority)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default TicketOpen;
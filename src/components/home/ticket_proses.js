import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../App';
import API_BASE_URL from '../../config/config';
import axios from 'axios';

const TicketProses = () => {

    const { state } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const userProfile = JSON.parse(localStorage.getItem('profile'))

    const [formData, setFormData] = useState({
        assigned_to: userProfile.id,
        status: "di_proses",
    });

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
                        
                        console.log(`cek data: ${data}`)
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
        Ticket Proses
        </>
    )
}

export default TicketProses;
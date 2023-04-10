import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../App';
import { Navigate, useNavigate } from 'react-router-dom';
import Header from "../../template/header";
import Dashboard from './dashboard';
import Ticket from './ticket';
import IconTiket from "../../assets/ic_tiket.svg";
import axios from 'axios';
import API_BASE_URL from '../../config/config';

export default function Home() {

    const { state } = useContext(AuthContext);
    const history = useNavigate();

    const [activeMenu, setActiveMenu] = useState('dashboard');
    const [loading, setLoading] = useState(true);
    
    const renderContent = () => {
        if (activeMenu === 'ticket') {
            return <Ticket/>
        } else {
            return <Dashboard/>;
        }
    };

    function goToNewTicket() {
        history('ticket/add');
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
            axios.get(API_BASE_URL + 'users/profile', config)

                .then((response) => {
                    if (response.data.status === "success") {
                        localStorage.setItem('profile', JSON.stringify(response.data.data[0])); 
                        
                        const userProfile = JSON.parse(localStorage.getItem('profile'))
                        console.log(`cek data userprofile name: ${userProfile.name}`);
                        console.log(`cek data userprofile role: ${userProfile.role}`);
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

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!state.isAuthenticated) {
        localStorage.clear()
        return <Navigate to="/login" />
    }

    return (
        <section>
            <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu} userProfile={JSON.parse(localStorage.getItem('profile'))} />
            
            <div className="h-screen md:flex">

                <div className="relative self-start overflow-hidden md:flex flex-1 bg-white justify-around items-center">
                {renderContent()}
                </div>

                <div className="flex w-421 justify-left items-center border-l">

                    <div className="relative self-start">
                        <img className="max-w-lg" src={IconTiket} alt="logo" />
                        <button
                            className="absolute h-11 bottom-14 left-6 right-6 bg-blue-500 ml-8 mr-8 text-white rounded-xl hover:bg-blue-600"
                            onClick={goToNewTicket}
                        >
                            <span className="text-2xl mr-3">+</span> <strong>Add Ticket</strong>
                        </button>

                    </div>

                </div>
            </div>
        </section>

    )
}
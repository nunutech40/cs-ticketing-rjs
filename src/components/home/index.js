import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../App';
import { Navigate, useNavigate } from 'react-router-dom';
import Header from "../../template/header";
import Dashboard from './dashboard';
import Ticket from './ticket';
import IconTiket from "../../assets/ic_tiket.svg";
import axios from 'axios';
import API_BASE_URL from '../../config/config';
import RightSidebar from '../../template/sidebar/rightsidebar';

export default function Home() {

    const { state, dispatch } = useContext(AuthContext);
    const history = useNavigate();

    const [activeMenu, setActiveMenu] = useState('dashboard');
    const [loading, setLoading] = useState(true);
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);


    const renderContent = () => {
        if (activeMenu === 'ticket') {
            return <Ticket />;
        } else {
            return <Dashboard />;
        }
    };

    useEffect(() => {
        var userId = localStorage.getItem('user_id');
        console.log(`cek data userid: ${userId}`);
        
        async function checkAuth() {
            setLoading(true);

            var token = localStorage.getItem('token');
            

            
            if (!token) {
                localStorage.clear();
                dispatch({ type: 'LOGOUT' });
                setLoading(false);
                return;
            } 

            token = token.replace(/"/g, '');

            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            try {
                
                const response = await axios.get(API_BASE_URL + 'users/profile/' + userId, config);
                if (response.data.status === 'success') {
                    localStorage.setItem('profile', JSON.stringify(response.data.data));
                
                } else {
                    
                }
            } catch (error) {
                
            }

            setLoading(false);
        }

        checkAuth();
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    function goToNewTicket() {
        history('ticket/add');
    }

    function handleAvatarClick() {
        toggleSidebar();
    }

    function toggleSidebar() {
        setIsSidebarVisible(!isSidebarVisible);
    }

    function signOut() {
        localStorage.clear();
        dispatch({ type: 'LOGOUT' });
        history('/login');
    }

    return (
        <section>
            <Header
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                userProfile={JSON.parse(localStorage.getItem('profile'))}
                onAvatarClick={handleAvatarClick}
            />

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

            {isSidebarVisible && (
                <RightSidebar
                    isSidebarVisible={isSidebarVisible}
                    toggleSidebar={toggleSidebar}
                    userProfile={JSON.parse(localStorage.getItem('profile'))}
                    onSignoutClick={signOut} />
            )}

        </section>

    )
}

import React, {useContext, useEffect} from 'react'
import {BiSearch} from "react-icons/bi";
import { AuthContext } from '../../App';
import {Navigate, useNavigate} from 'react-router-dom';
import Sidebar from "../sidebar";
import Login from "../auth/index";

export default function Home() {
    const {state} = useContext(AuthContext);

    useEffect (() => {
        if (localStorage.getItem('token')) {
            state.isAuthenticated = true
        } else {
            state.isAuthenticated = false
        }
    }, []);

    if(!state.isAuthenticated){
        return <Navigate to="/login" />
    }

    return (
        <section className="w-full flex flex-wrap">
            <Sidebar/>
            <div className="px-14 flex-1 pt-14">
                <div className="border border-gray-300 rounded w-full flex py-3 px-3 items-center rounded-xl">
                    <BiSearch className="mr-2"/>
                    <input type={"text"} className="flex-1" placeholder="Search"/>
                </div>
                <h1>This is home</h1>
            </div>

        </section>
    )
}
import React, {Fragment, useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import BugReportLogo from "../../assets/bugreport.png";

const api = 'http://127.0.0.1:8000/api/';



export default function Register(props) {

    const history = useNavigate();

    function goToLogin() {
        history('/login');
    }

    return(
        <section>
            <div className="h-screen md:flex">
                <div className="relative overflow-hidden md:flex w-2/3 bg-white justify-around items-center hidden">
                    <img
                        className="max-w-lg"
                        src={BugReportLogo}
                        alt="logo"
                    />
                </div>
                <div className="flex md:w-1/3 justify-left items-center">
                    <form className="bg-white  w-full">
                        <h1 className="text-gray-800 font-bold text-2xl mb-6">Sing Up</h1>
                        <p className="text-sm font-normal text-gray-600 mb-6">Create your Bug Report Account</p>

                        <div className="mb-4 max-w-sm">
                            <label className="block text-grey-darker text-sm mb-2" htmlFor="fullness">
                            Full Name
                        </label>
                            <input className="w-full py-2 px-3 text-grey-darker rounded-xl border-2"
                                   id="username" type="text" placeholder="Full Name"/>
                        </div>
                        <div className="mb-4 max-w-sm">
                            <label className="block text-grey-darker text-sm mb-2" htmlFor="fullness">
                                Email
                            </label>
                            <input className="w-full py-2 px-3 text-grey-darker rounded-xl border-2"
                                   id="email" type="email" placeholder="@gmail"/>
                        </div>
                        <div className="mb-4 max-w-sm">
                            <label className="block text-grey-darker text-sm mb-2" htmlFor="fullness">
                                Password
                            </label>
                            <input className="w-full py-2 px-3 text-grey-darker rounded-xl border-2"
                                   id="email" type="password" placeholder="Password"/>
                        </div>
                        <div className="mb-6 max-w-sm">
                            <label className="block text-grey-darker text-sm mb-2" htmlFor="fullness">
                                Correct Password
                            </label>
                            <input className="w-full py-2 px-3 text-grey-darker rounded-xl border-2"
                                   id="email" type="password" placeholder="Password"/>
                        </div>
                        <div className="mb-4 max-w-sm">
                            <button type="submit"
                                    className="block w-full bg-sky-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Create Account
                            </button>
                        </div>

                        <div>
                            <p>Already Have Account <span className="text-blue-700" onClick={goToLogin}>Log in?</span></p>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    )
}
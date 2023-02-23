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
                        <h1 className="text-gray-800 font-bold text-2xl mb-6">Sign Up</h1>
                        <p className="text-sm font-normal text-gray-600 mb-6">Create your Bug Report Account</p>

                        <div className="mb-4 max-w-sm">
                            <label className="block text-grey-darker text-sm mb-2" htmlFor="fullness">
                            Full Name
                        </label>
                            <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                   id="username" type="text" placeholder="Full Name"/>
                        </div>
                        <div className="mb-4 max-w-sm">
                            <label className="block text-grey-darker text-sm mb-2" htmlFor="fullness">
                                Email
                            </label>
                            <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                   id="email" type="email" placeholder="@gmail"/>
                        </div>
                        <div className="mb-4 max-w-sm">
                            <label className="block text-grey-darker text-sm mb-2" htmlFor="fullness">
                                Password
                            </label>
                            <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                   id="email" type="password" placeholder="Password"/>
                        </div>
                        <div className="mb-6 max-w-sm">
                            <label className="block text-grey-darker text-sm mb-2" htmlFor="fullness">
                                Correct Password
                            </label>
                            <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                   id="email" type="password" placeholder="Password"/>
                        </div>
                        <div className="mb-4 max-w-sm">
                            <button type="submit"
                                    className="bg-sky-500 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3">Create Account
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
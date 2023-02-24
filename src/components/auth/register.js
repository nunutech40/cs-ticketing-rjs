import React, {Fragment, useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import BugReportLogo from "../../assets/bugreport.png";
import axios from "axios";
import {AuthContext} from "../../App";
const api = 'http://127.0.0.1:8000/api/';

export default function Register(props) {

    localStorage.clear()
    const { dispatch } = useContext(AuthContext)
    const history = useNavigate();

    const initialState = { isSubmitting: false, errorMessage: null}
    const stateForm = { fullName: "", email: "", role: "CS", password: "", verifyPassword: "" }

    const [dataAct, setDataAct] = useState(initialState);
    const [dataForm, setDataForm] = useState(stateForm);
    const [testAja, setTestAja] = useState("")
    useEffect (() => {

    }, []);

    // disini ngambil data dari input dan perubahan dari input text
    const handleInputChange = event => {
        setDataForm({
            ...dataForm,
            [event.target.name]: event.target.value,
        })

        console.log("cek dataForm")
        console.log(dataForm)
    }

    function checkMatchPassword(password, correctPassword) {
        let result = false;
        if (password === correctPassword) {
            result = true
        }
        return result
    }

    const handleFormSubmit = event => {
        event.preventDefault()

        setDataAct({
            ...dataAct,
            isSubmitting: true,
            errorMessage: null
        })

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        const requestBody = {
            name: dataForm.fullName,
            email: dataForm.email,
            role: dataForm.role,
            password: dataForm.password
        }

        axios.post(api + "auth/register", requestBody, config)
            .then(res => {
                if (res.data.status === "Success") {
                    dispatch({
                        type: "REGISTER",
                        payload: res.data
                    })
                    history('/login')
                }
                else if (res.data.status === "failed") {
                    setDataAct({
                        ...dataAct,
                        isSubmitting: false,
                        errorMessage: "Cek Email dan password."
                    })
                }
                else {
                    setDataAct({
                        ...dataAct,
                        isSubmitting: false,
                        errorMessage: res.data.Message
                    })
                }

                throw res
            })
            .catch(e => {
                console.log(e)
            })
    }

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
                    <form onSubmit={handleFormSubmit}
                        className="bg-white w-full">
                        <h1 className="text-gray-800 font-bold text-2xl mb-6">Sign Up</h1>
                        <p className="text-sm font-normal text-gray-600 mb-6">Create your Bug Report Account</p>

                        <div className="mb-4 max-w-sm">
                            <label className="block text-grey-darker text-sm mb-2" htmlFor="fullness">
                            Full Name
                        </label>
                            <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                   id="fullName"
                                   type="text"
                                   placeholder="Full Name"
                                   name="fullName"
                                   onChange={handleInputChange}
                                   value={dataForm.fullName}
                            />
                        </div>
                        <div className="mb-4 max-w-sm">
                            <label className="block text-grey-darker text-sm mb-2" htmlFor="fullness">
                                Email
                            </label>
                            <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                   id="email"
                                   type="email"
                                   placeholder="@gmail"
                                   name="email"
                                   onChange={handleInputChange}
                                   value={dataForm.email}
                            />
                        </div>
                        <div className="mb-4 max-w-sm">
                            <label className="block text-grey-darker text-sm mb-2" htmlFor="fullness">
                                Password
                            </label>
                            <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                   id="password"
                                   type="password"
                                   placeholder="Password"
                                   name="password"
                                   onChange={handleInputChange}
                                   value={dataForm.password}
                            />
                        </div>
                        <div className="mb-6 max-w-sm">
                            <label className="block text-grey-darker text-sm mb-2" htmlFor="fullness">
                                Correct Password
                            </label>
                            <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                   id="verifyPassword"
                                   type="password"
                                   placeholder="Password"
                                   name="verifyPassword"
                                   onChange={handleInputChange}
                                   value={dataForm.verifyPassword}
                            />
                        </div>
                        <div className="mb-4 max-w-sm">
                            <button type="submit"
                                    className="bg-sky-500 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    disabled={dataAct.isSubmitting}>
                                    {dataAct.isSubmitting ? (
                                            "..Loading"
                                        ) :
                                        (
                                            "Register"
                                        )
                                    }

                            </button>
                        </div>

                        <div>
                            <p>Already Have Account <span className="text-blue-700" onClick={goToLogin}>Log in?</span></p>
                        </div>

                        <div>
                            <button onClick={() => setTestAja("Hello Dor...")}>
                                Test Button Here
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    )
}
import React, {Fragment, useContext, useEffect, useState} from 'react'
import axios from 'axios'
import Logo from "../../assets/logo.svg";
import { AuthContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import BugReportLogo from "../../assets/bugreport.png";
const api = 'http://127.0.0.1:8000/api/';


export default function Login(props) {

    const { dispatch } = useContext(AuthContext)
    const history = useNavigate();

    useEffect (() => {
        if (localStorage.getItem('token')) {
            history('/');
        }
    }, []);


    const initialState = { isSubmitting: false, errorMessage: null}

    const stateForm = { email: "", password: "" }

    const [data, setData] = useState(initialState)
    const [dataform, setDataForm] = useState(stateForm)


    const handleInputChange = event => {
        setDataForm({
            ...dataform,
            [event.target.name]: event.target.value,
        })

    }
    const handleFormSubmit = event => {
        event.preventDefault()

        setData({
            ...data,
            isSubmitting: true,
            errorMessage: null
        })

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        const requestBody = {
            email: dataform.email,
            password: dataform.password
        }

        axios.post(api + "auth/login", requestBody, config)
            .then(res => {
                if (res.data.status === "success") {
                    dispatch({
                        type: "LOGIN",
                        payload: res.data
                    })
                    history('/')
                }
                else if (res.data.status === "failed") {
                    setData({
                        ...data,
                        isSubmitting: false,
                        errorMessage: "Email anda belum terverifikasi, silahkan cek email!"
                    })
                }
                else {
                    console.log("cek success else")
                    setData({
                        ...data,
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

    function goToRegister() {
        history('/register');
    }

    return (
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
                    <div className="w-full px-8">

                        <h1 className="text-gray-800 font-bold text-2xl mb-6">Log In</h1>
                        <p className="text-sm font-normal text-gray-600 mb-6">Wellcome back, report and fix your bug</p>
                        <form onSubmit={handleFormSubmit}>

                            <div className="mb-4 max-w-sm">
                                <label className="block text-grey-darker text-sm mb-2" htmlFor="username">
                                    Username
                                </label>
                                <input
                                    type="email"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="idusername"
                                    placeholder="Username"
                                    name="email"
                                    onChange={handleInputChange}
                                    value={dataform.email}
                                />
                            </div>
                            <div className="mb-4 max-w-sm">
                                <label className="block text-grey-darker text-sm mb-2" htmlFor="username">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="idpassword"
                                    placeholder="Password"
                                    name="password"
                                    onChange={handleInputChange}
                                    value={dataform.password}
                                />
                            </div>
                            <div className="mb-4 max-w-sm">
                                <button
                                    className="bg-sky-500 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                                    type="submit"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    disabled={data.isSubmitting}>
                                    {data.isSubmitting ? (
                                            "..Loading"
                                        ) :
                                        (
                                            "Sig In"
                                        )
                                    }
                                </button>
                                <div>
                                    <p>Don't have an account?<span className="text-blue-700" onClick={goToRegister}> Sign Up</span></p>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}
import React, {Fragment, useContext, useEffect, useState} from 'react'
import axios from 'axios'
import Logo from "../../assets/logo.svg";
import { AuthContext } from '../../App';
import { useNavigate } from 'react-router-dom';
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
        console.log("cek submit")
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

    return (
        <section className="grid h-screen place-items-center bg-gray-200">
            <div className="container py-12 px-12">
                <div className="flex justify-center items-center flex-wrap gap-6 text-gray-800">

                    <div className="block bg-white shadow-lg rounded-lg">
                        <div className="flex flex-wrap mt-8">
                            <div className="w-full px-8">
                                <div className="text-center">
                                    <img
                                        className="mx-auto w-48"
                                        src={Logo}
                                        alt="logo"
                                    />
                                    <h4 className="text-xl mt-1 mb-12 pb-1">Selamat Datang Di POS ReactJS</h4>
                                </div>
                                <form onSubmit={handleFormSubmit}>
                                    <p>Please Login to your account</p>
                                    <div className="mb-4">
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
                                    <div className="mb-4">
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
                                    <div className="text-center pt-1 mb-12 pb-1">
                                        <button
                                            className="bg-emerald-600 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                                            type="submit"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                            disabled={data.isSubmitting}>
                                            {data.isSubmitting ? (
                                                    "..Loading"
                                                ) :
                                                (
                                                    "Login"
                                                )
                                            }
                                        </button>
                                        <a className="text-gray-500" href="#!">Forgot password?</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
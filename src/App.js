import './App.css';
import React, { useReducer, createContext } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/home";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import CreateTicket from "./components/ticket";

//Context
export const AuthContext = createContext()

//Inisiasi state
const initialState = {
    isAuthenticated: false,
    token: null,
    tokenExpires: 0,
    role: "user"
}

const reducer = (state, action) => {
    switch(action.type) {
        case "LOGIN":
            localStorage.setItem("token", JSON.stringify(action.payload.data.data.access_token))
            return {
                ...state,
                isAuthenticated: true,
                token: localStorage.getItem("token"),
                tokenExpires: 3600,
                role: "admin"
            }
        case "LOGOUT":
            localStorage.clear()
            return {
                ...state,
                isAuthenticated: false,
                token: null
            }

        default:
            return state
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    console.log("cek run app  state")
    console.log(state.isAuthenticated);
    console.log(state.role);
    console.log(state.token);
    console.log("cek dispatch: " + dispatch);


    return (
        <Router forceRefresh={true}>
            <AuthContext.Provider value={{
                state,
                dispatch
            }}>
                <div className="w-full">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="register" element={<Register/>}/>
                        <Route path="ticket/add" element={<CreateTicket/>}/>
                    </Routes>
                </div>
            </AuthContext.Provider>

        </Router>
    );
}

export default App;

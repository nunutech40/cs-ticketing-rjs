import React, {useContext, useEffect} from 'react'
import Header from "../../template/header";
import IconTiket from "../../assets/ic_tiket.svg";

export default function CreateTicket() {
    return (
        <section>
            <Header/>
            <div className="h-screen md:flex">

                <div className="relative self-start overflow-hidden md:flex flex-1 bg-white justify-around items-center">

                </div>

                <div className="flex w-421 justify-left items-center border-l">

                    <div className="relative self-start">
                        <img className="max-w-lg" src={IconTiket} alt="logo" />
                        <button className="absolute h-11 bottom-14 left-6 right-6 bg-blue-500 ml-8 mr-8 text-white rounded-xl hover:bg-blue-600">
                            <span className="text-2xl mr-3">+</span> <strong>Add Ticket</strong>
                        </button>

                    </div>

                </div>
            </div>
        </section>

    )
}
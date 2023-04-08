import React from 'react';
import ICKOMERCE from "../../assets/ic_komerce.svg";
import MOON from "../../assets/moon.svg";
import Avatar from "../../assets/avatar.svg";

export default function Header() {

    return <header className="text-white flex flex-wrap justify-between items-center border-b border-gray-300">
        <div className="flex items-center ml-4">
            <img className="h-26px w-26px mt-1 ml-1" src={ICKOMERCE} alt="logo" />
        </div>

        <div className="flex justify-center items-center  ml-9">
            <a href="#" className="text-gray-400 py-6 px-6 hover:text-blue-400 border-b-2 border-transparent hover:border-blue-400">
                Dashboard
            </a>
            <a href="#" className="text-gray-400 py-6 px-6 hover:text-blue-400 border-b-2 border-transparent hover:border-blue-400">
                Tiket
            </a>
        </div>

        <div className="flex items-center mr-4">
            <div className="flex-wrap background text-right">
                <strong className="block items-end text-black">Rizka Fajar Nugraha</strong>
                <span className="text-black">Programmer</span>
            </div>

            <button>
                <img className="h-40px w-40px ml-4 mr-4" src={Avatar} alt="logo" />
            </button>
            <button>
                <img className="h-26px w-26px mt-1 ml-1" src={MOON} alt="logo" />
            </button>
        </div>
    </header>

}
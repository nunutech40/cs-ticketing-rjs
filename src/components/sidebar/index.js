import React, {useState} from "react";
import Logo from "../../assets/logo.svg";
import {BiHomeAlt} from "react-icons/bi";
import {MdOutlineCallToAction, MdOutlineMonetizationOn} from "react-icons/md";
import {RiProductHuntLine} from "react-icons/ri"
import {AiOutlineSetting, AiOutlineLogout} from "react-icons/ai"
import {Link} from "react-router-dom";

export default function Sidebar(props, {defaultActive}) {

    const [activeIndex, ] = useState(defaultActive || 1);

    const menu = [
        {name:"Home", icon:<BiHomeAlt/>, route: "/"},
        {name:"Order", icon:<MdOutlineCallToAction/>, route: "/order"},
        {name:"Produk", icon:<RiProductHuntLine/>, route: "/product"},
        {name:"Keuangan", icon:<MdOutlineMonetizationOn/>, route: "/money"},
        {name:"Pengaturan", icon:<AiOutlineSetting/>, route: "/setting"},
        {name:"Logout", icon:<AiOutlineLogout/>, route: "/logout"}
    ]

    return <div className="h-screen border-r border-gray-200 w-64 px-9 py-9 space-y-20">
        <div className="flex flex-row items-center">
            <img src={Logo} alt="react" className="w-9 h-9"/>
            <div>Pos Cafe</div>
        </div>
        <div className="space-y-24">
            <div>
                <div className="font-bold mb-7">Menu</div>
                <ul className="space-y-7">
                    {
                        menu.map((val, index) => {
                            return (
                                <Link to={val.route}>
                                    <li key={index} className="mb-7 flex flex-row items-center" active={index === activeIndex}>
                                        <div className="mr-5">{val.icon}</div>
                                        <div>{val.name}</div>
                                    </li>
                                </Link>

                            );
                        })
                    }
                </ul>
            </div>
        </div>

    </div>
}
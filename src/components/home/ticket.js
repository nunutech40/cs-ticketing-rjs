import React, { useContext, useEffect, useState } from 'react'
import SearchIC from "../../assets/search-normal.svg";
import NotificationIcon from "../../assets/notification.svg"
import TicketOpen from './ticket_open';
import TicketProses from './ticket_proses';
import TicketDone from './ticket_done';

const Ticket = () => {
    const [activeTab, setActiveTab] = useState(0);

    const renderTabContent = () => {
        switch (activeTab) {
            case 0:
                return <TicketOpen />;
            case 1:
                return <TicketProses />;
            case 2:
                return <TicketDone />;
            default:
                return null;
        }
    };

    return (
        <>
            <div className="w-full mt-8">

                <div className="flex items-center space-x-4 ml-8 mb-6 mr-8">
                    <div className="font-bold text-3xl w-1/2">Riwayat Tickets</div>

                    <div className="flex items-center space-x-4 w-1/2 justify-end">
                        <div className="relative w-full">
                            <img src={SearchIC} className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 ml-2" alt="logo" />
                            <input
                                type="text"
                                className="pl-8 pr-2 py-1 w-full rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500 ml-1"
                                placeholder="Search"
                            />
                        </div>

                        <div className="inline-flex items-center justify-center p-2 bg-white rounded-xl border border-gray-300">
                            <img src={NotificationIcon} alt="logo" />
                        </div>
                    </div>
                </div>
                <div className="w-full md:flex mx-8">
                    <div className="w-full">
                        <div className="flex justify-start space-x-4 mb-4 pr-12">
                            <button
                                className={`py-1 px-4 rounded-t ${activeTab === 0 ?  'bg-gray-200 text-gray-800' : 'bg-red-500 text-white'} border-b-4 ${activeTab === 0 ? 'border-gray-200' : 'border-transparent'}`}
                                onClick={() => setActiveTab(0)}
                            >
                                Bug Open
                            </button>
                            <button
                                className={`py-1 px-4 rounded-t ${activeTab === 1 ?  'bg-gray-200 text-gray-800' : 'bg-yellow-600  text-white'} border-b-4 ${activeTab === 1 ? 'border-gray-200' : 'border-transparent'}`}
                                onClick={() => setActiveTab(1)}
                            >
                                On Progress
                            </button>
                            <button
                                className={`py-1 px-4 rounded-t ${activeTab === 2 ? 'bg-gray-200 text-gray-800' : 'bg-blue-500 text-white' } border-b-4 ${activeTab === 2 ? 'border-gray-200' : 'border-transparent'}`}
                                onClick={() => setActiveTab(2)}
                            >
                                Solved
                            </button>
                        </div>
                        <div className="w-full mt-8">
                            {renderTabContent()}
                        </div>
                    </div>
                </div>



            </div>
        </>
    );
}

export default Ticket;
import React from 'react';
import ICClose from "../../../assets/close-circle.svg";

const TicketStatusPopUp = ({ show, onClose, handleMenuItemClick }) => {
  if (!show) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div className="bg-white p-2 rounded-lg shadow-md">
        <div className="flex justify-end">
          <img src={ICClose} alt="logo" />
        </div>

        <ul className="space-y-2">
          <li>
            <button
              className="text-left w-full px-4 py-2 hover:bg-gray-100 rounded"
              onClick={() => handleMenuItemClick("belum_di_proses")}
            >
              Bug Open
            </button>
          </li>
          <li>
            <button
              className="text-left w-full px-4 py-2 hover:bg-gray-100 rounded"
              onClick={() => handleMenuItemClick("di_proses")}
            >
              On Progress
            </button>
          </li>
          <li>
            <button
              className="text-left w-full px-4 py-2 hover:bg-gray-100 rounded"
              onClick={() => handleMenuItemClick("done")}
            >
              Solved
            </button>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default TicketStatusPopUp;

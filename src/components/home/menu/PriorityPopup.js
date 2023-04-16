import React from 'react';
import ICClose from "../../../assets/close-circle.svg";

const PriorityPopup = ({ show, onClose, handleMenuItemClick }) => {
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
              onClick={() => handleMenuItemClick("no priority")}
            >
              No Priority
            </button>
          </li>
          <li>
            <button
              className="text-left w-full px-4 py-2 hover:bg-gray-100 rounded"
              onClick={() => handleMenuItemClick("low")}
            >
              Low Priority
            </button>
          </li>
          <li>
            <button
              className="text-left w-full px-4 py-2 hover:bg-gray-100 rounded"
              onClick={() => handleMenuItemClick("medium")}
            >
              Medium Priority
            </button>
          </li>
          <li>
            <button
              className="text-left w-full px-4 py-2 hover:bg-gray-100 rounded"
              onClick={() => handleMenuItemClick("high")}
            >
              High Priority
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PriorityPopup;

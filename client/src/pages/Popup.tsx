import React, { useState, useEffect } from "react";

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isVisible
          ? "opacity-100 transition-opacity duration-500"
          : "opacity-0 pointer-events-none transition-opacity duration-500"
      }`}
    >
      <div className="bg-gray-800 text-white p-4 rounded shadow-md">
        <p className="text-center">Login or Sign Up to view the events</p>
      </div>
    </div>
  );
};

export default Popup;

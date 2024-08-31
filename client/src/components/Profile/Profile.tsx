import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./profile.scss";



export const Profile: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="profile relative">
      <button
        className="profile__button flex items-center space-x-3"
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isDropdownOpen}
      >
        <img
          src="../../../public/images/blog-undefined-1723494264350-image.webp"
          alt={`avatar`}
          className="profile__avatar w-10 h-10 rounded-full"
        />
        <span className="profile__name text-sm font-medium">Abdi</span>
      </button>

      {isDropdownOpen && (
        <div className="profile__dropdown absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <ul className="profile__list py-2 text-sm text-gray-700">
            <li className="profile__item">
              <Link to="/profile" className="profile__link block px-4 py-2 hover:bg-gray-100">
                Profile
              </Link>
            </li>
            <li className="profile__item">
              <Link to="/dashboard" className="profile__link block px-4 py-2 hover:bg-gray-100">
                Dashboard
              </Link>
            </li>
            <li className="profile__item">
              <Link to="/settings" className="profile__link block px-4 py-2 hover:bg-gray-100">
                Settings
              </Link>
            </li>
            <li className="profile__item">
              <Link to="/logout" className="profile__link block px-4 py-2 hover:bg-gray-100">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

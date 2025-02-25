import { useState } from 'react';

function ProfileButton() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => setDropdownVisible((prev) => !prev);
  const gotoProfile = () => {
    navigate("/profile")
  }

  return (
    <div className="relative inline-block">
      <button
        className="flex items-center space-x-2 focus:outline-none"
        onClick={() => {
          gotoProfile();
          toggleDropdown();
        }}
      >
        <img
          src="/images/profle.jpg" // Replace with actual user profile image
          alt="Profile"
          className="h-32 w-32 rounded-full border-2 border-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-blue-500 hover:shadow-2xl hover:border-blue-500"
        />
      </button>

      {/* Dropdown Menu */}
      {dropdownVisible && (
        <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg animate-fadeIn">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer transition-colors duration-300">
              View Profile
            </li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer transition-colors duration-300">
              Settings
            </li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer transition-colors duration-300">
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProfileButton;

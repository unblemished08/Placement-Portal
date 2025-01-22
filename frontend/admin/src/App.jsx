import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [coordinators, setCoordinators] = useState([]);
  const [email, setEmail] = useState('');

  const generatePassword = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    let password = '';
    for (let i = 0; i < 16; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  };

  const handleAddCoordinator = (e) => {
    e.preventDefault();
    if (!email.endsWith('@nitkkr.ac.in')) {
      alert('Email must end with @nitkkr.ac.in');
      return;
    }

    if (coordinators.some(coordinator => coordinator.email === email)) {
      alert('Email ID already exists');
      return;
    }

    const password = generatePassword();
    setCoordinators([...coordinators, { email, password }]);
    setEmail('');
  };

  const handleDeleteCoordinator = (index) => {
    setCoordinators(coordinators.filter((_, i) => i !== index));
  };

  const handleCopyPassword = (password) => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard');
  };


  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-5/12">
        <h2 className="text-2xl font-bold mb-4 text-center">Coordinators List</h2>

        {/* Form */}
        <form onSubmit={handleAddCoordinator} className="flex flex-col space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              Email (must end with @nitkkr.ac.in):
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
              placeholder="example@nitkkr.ac.in"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Add Coordinator
          </button>
        </form>

        {/* Coordinator List */}
        <ul className="mt-6 space-y-4">
          {coordinators.map((coordinator, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-4 pr-2 bg-gray-50 border rounded shadow"
            >
              <div>
                <p className="font-medium">Email: {coordinator.email}</p>
                <div className="relative flex items-center space-x-2 mt-1">
                  <label htmlFor={index}>Password: </label>
                  <input
                    type="password"
                    id={index}
                    value={coordinator.password}
                    className="password-input border-gray-300 rounded-md shadow-sm  px-2 py-1 w-4/6"
                    readOnly
                  />
                  <button
                    type="button"
                    className=" toggle-password text-blue-500 hover:underline"
                    onClick={(e) => {
                      const input = e.target.parentElement.querySelector('.password-input');
                      if (input.type === 'password') {
                        input.type = 'text';
                        e.target.textContent = 'Hide';
                      } else {
                        input.type = 'password';
                        e.target.textContent = 'Show';
                      }
                    }}
                  >
                    Show
                  </button>
                  <button
                      type="button"
                      className=""
                      onClick={() => handleCopyPassword(coordinator.password)}
                    >
                      <img src="/copy.png" alt="Copy" className='w-7'/>
                  </button>
                </div>
              </div>
              <button
                type="button"
                className="delete-btn bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                onClick={() => handleDeleteCoordinator(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
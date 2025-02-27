import { useState } from "react";

function Form() {
  const [coordinators, setCoordinators] = useState([]);
  const [email, setEmail] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [post, setPost] = useState("");
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [isBadEmail, setIsBadEmail] = useState(false);
  const [isEmailAlreadyExists, setIsEmailAlreadyExists] = useState(false);
  const [isRollNoAlreadyExists, setIsRollNoAlreadyExists] = useState(false);

  const generatePassword = () => {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < 16; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  };

  const handleAddCoordinator = (e) => {
    e.preventDefault();
    if (!email.endsWith("@nitkkr.ac.in")) {
      setIsBadEmail(true);
      return;
    }
    setIsBadEmail(false);

    if (coordinators.some((coordinator) => coordinator.email === email)) {
      setIsEmailAlreadyExists(true);
      return;
    }
    setIsEmailAlreadyExists(false);

    if (coordinators.some((coordinator) => coordinator.rollNo === rollNo)) {
      setIsRollNoAlreadyExists(true);
      return;
    }
    setIsRollNoAlreadyExists(false);

    const password = generatePassword();
    setCoordinators([...coordinators, { email, rollNo, post, password }]);
    setEmail("");
    setRollNo("");
    setPost("");
  };

  const handleDeleteCoordinator = (index) => {
    setCoordinators(coordinators.filter((_, i) => i !== index));
  };

  const handleCopyPassword = (password) => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center">
      <div className="bg-gray-800 text-white shadow-lg rounded-lg p-6 w-5/12">
        <h2 className="text-2xl font-bold mb-4 text-center">Coordinators List</h2>
        <form onSubmit={handleAddCoordinator} className="flex flex-col space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold">
              Email (must end with @nitkkr.ac.in):
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full bg-gray-700 text-white border-gray-600 rounded-md shadow-sm p-2"
              placeholder="example@nitkkr.ac.in"
              required
            />
          </div>
          {isBadEmail && <p className="text-red-400">Email must end with @nitkkr.ac.in</p>}
          {isEmailAlreadyExists && <p className="text-red-400">Email ID already exists</p>}
          <label htmlFor="rollNo" className="font-semibold">Roll No:</label>
          <input
            type="text"
            id="rollNo"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            className="mt-1 block w-full bg-gray-700 text-white border-gray-600 rounded-md shadow-sm p-2"
            placeholder="Roll No"
            required
          />
          {isRollNoAlreadyExists && <p className="text-red-400">Roll No already exists</p>}
          <label htmlFor="post" className="font-semibold">Post:</label>
          <select
            id="post"
            value={post}
            onChange={(e) => setPost(e.target.value)}
            className="mt-1 block w-full bg-gray-700 text-white border-gray-600 rounded-md shadow-sm p-2"
          >
            <option value="">Select Post</option>
            <option value="ICC">ICC</option>
            <option value="PCC">PCC</option>
          </select>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
          >
            Add Coordinator
          </button>
        </form>
        <ul className="mt-6 space-y-4">
          {coordinators.map((coordinator, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-4 bg-gray-700 border border-gray-600 rounded-md shadow"
            >
              <div>
                <p>Email: {coordinator.email}</p>
                <p>Roll No: {coordinator.rollNo}</p>
                <p>Post: {coordinator.post}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <input
                    type="password"
                    value={coordinator.password}
                    className="bg-gray-600 text-white border-gray-500 rounded-md px-2 py-1 w-36"
                    readOnly
                  />
                  <button
                    type="button"
                    className="text-blue-400 hover:text-blue-500"
                    onClick={() => handleCopyPassword(coordinator.password)}
                  >
                    Copy
                  </button>
                </div>
              </div>
              <button
                type="button"
                className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md"
                onClick={() => handleDeleteCoordinator(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Form;

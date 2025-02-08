import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <div className="flex bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
        {/* Left Side - Image & Text */}
        <div className="w-1/2 relative hidden md:block">
          <img
            src="./images/placement5.png" 
            alt="Background"
            className="h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-6">
            {/* <h1 className="text-3xl font-semibold">Placement Portal</h1> */}
            {/* <p className="mt-4 text-lg">A Step Closer To Your Destination</p> */}
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-white">Log in</h2>
          <p className="text-gray-400 mt-2">
            Don't have an account?{" "}
            <a href="#" className="text-purple-400 hover:underline">
              Sign up
            </a>
          </p>

          {/* Form */}
          <form className="mt-6">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-400"
            />

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-4 p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-400"
            />

            {/* Remember Me & Forgot Password */}
            <div className="mt-4 flex items-center justify-between">
              <label className="flex items-center text-gray-400">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-purple-400 bg-gray-700 border-gray-600 focus:ring-purple-400"
                />
                <span className="ml-2 text-sm">Remember me</span>
              </label>
              <a href="#" className="text-sm text-purple-400 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button className="w-full mt-6 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded transition">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

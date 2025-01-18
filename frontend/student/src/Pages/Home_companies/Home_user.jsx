import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import CompaniesSlider from "./CompaniesSlider";

function Home_user() {
  const { companies } = useContext(StoreContext);
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <header
        className=" bg-cover bg-center bg-no-repeat bg-gray-800 text-white py-10"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x900/?career,technology')",
        }}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-center ">
        <div className="flex-row items-center w-2/12 h-full  ">
          <img
            src="/images/placement6.png"
            alt="Logo"
            className="h-4/5" // Adjust width and height as needed
          />
        </div>
        <div className="text-center w-4/5 ">
          <h1 className="text-4xl font-bold">Welcome to the Placement Portal</h1>
          <p className="text-lg mt-4">Your path to a successful career begins here.</p>
        </div>
      </div>

      </header>


      <main className="container mx-auto px-4 py-10">
        {/* Statistics Section */}
        <section className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white h-60 shadow-lg rounded-lg p-6 hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out">
            <h2 className="text-4xl mt-14 font-bold text-blue-600">500+</h2>
            <p className=" text-gray-700">Offers Made</p>
          </div>
          <div className="bg-white  shadow-lg rounded-lg p-6 hover hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out">
            <h2 className="text-4xl mt-14 font-bold text-blue-600">75 LPA</h2>
            <p className="mt-2 text-gray-700">Highest CTC</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out">
            <h2 className="text-4xl mt-14 font-bold text-blue-600">200+</h2>
            <p className="mt-2 text-gray-700">Recruiting Companies</p>
          </div>
        </section>

        {/* slider */}
        <header className="text-center  text-gray-700 py-20" >
          <h1 className="text-4xl font-bold">Some Best Offers</h1>
        </header>
        <div className="flex items-center justify-center py-10">
          <CompaniesSlider companies={companies} />
        </div>



        {/* Top Recruiters Section */}
        {/* <section className="mt-10">
          <h2 className="text-2xl font-bold text-center text-gray-800">Top Recruiters</h2>
          <div className="flex overflow-x-auto gap-4 mt-6 py-4 px-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Adobe_logo.png"
              alt="Adobe Logo"
              className="w-32 h-auto rounded-lg hover:scale-110 transition-transform duration-300"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Google_2015_logo.svg"
              alt="Google Logo"
              className="w-32 h-auto rounded-lg hover:scale-110 transition-transform duration-300"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Amazon_logo_plain.svg"
              alt="Amazon Logo"
              className="w-32 h-auto rounded-lg hover:scale-110 transition-transform duration-300"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Microsoft_logo_%282012%29.svg"
              alt="Microsoft Logo"
              className="w-32 h-auto rounded-lg hover:scale-110 transition-transform duration-300"
            />
          </div>
        </section> */}

        {/* Success Stories Section */}
        <section className="mt-10 bg-gray-100 py-20 px-40">
          <h2 className="text-2xl font-bold text-center text-gray-800">Alumni Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-700">"Thanks to this portal, I secured my dream job at Google!"</p>
              <strong className="block mt-4 text-gray-800">- John Doe</strong>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-700">"The resources and guidance here are unmatched. Highly recommend it."</p>
              <strong className="block mt-4 text-gray-800">- Jane Smith</strong>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-700">"The portal helped me prepare for interviews and stand out!"</p>
              <strong className="block mt-4 text-gray-800">- Chris Johnson</strong>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>
          &copy; 2025 Placement Portal. All Rights Reserved.{" "}
          <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a> |{" "}
          <a href="#" className="text-blue-400 hover:underline">Contact Us</a>
        </p>
      </footer>
    </div>
  );
}

export default Home_user;

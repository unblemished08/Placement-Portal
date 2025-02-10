import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import ResultSlider from "./ResultSlider";

function Home() {
  const { result_for_profile } = useContext(StoreContext);

  return (
    <div className="bg-gray-900 text-white">
      <header
        className="relative bg-cover bg-center bg-no-repeat text-white py-10"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?career,technology')" }}
      >
        {/* Bell Icon at Top-Right */}
        <div className="absolute top-4 pt-2 pr-1 right-4">
          <a href="/sendNotification">
            <img src="/images/bell.png" alt="Notification" className="w-9 h-9" />
          </a>
        </div>

        {/* Logo & Text Section */}
        <div className="flex items-center justify-center">
          {/* Logo */}
          <div className="flex-row items-center w-2/12 h-full">
            <img src="/images/placement7.png" alt="Logo" className="h-4/5" />
          </div>

          {/* Title & Subtitle */}
          <div className="text-center w-4/5">
            <h1 className="text-4xl font-bold">Welcome to the Placement Portal</h1>
            <p className="text-lg mt-4">Your path to a successful career begins here.</p>
          </div>
        </div>
      </header>




      <main className="container mx-auto px-4 py-10">
        {/* Statistics Section */}
        <section className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-gray-800 h-60 shadow-lg rounded-lg p-6 hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out">
            <h2 className="text-4xl mt-14 font-bold text-blue-300">500+</h2>
            <p className=" ">Offers Made</p>
          </div>
          <div className="bg-gray-800  shadow-lg rounded-lg p-6 hover hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out">
            <h2 className="text-4xl mt-14 font-bold text-blue-300 ">75 LPA</h2>
            <p className="mt-2 ">Highest CTC</p>
          </div>
          <div className="bg-gray-800 shadow-lg rounded-lg p-6 hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out">
            <h2 className="text-4xl mt-14 font-bold text-blue-300">200+</h2>
            <p className="mt-2 ">Recruiting Companies</p>
          </div>
        </section>

        {/* About College Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-8">About Our College</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <img src="./images/golden jublie.jpg" alt="Golden Jubilee" className="rounded-lg shadow-lg w-full md:w-3/4" />
              </div>
              <div className="text-gray-300 leading-relaxed">
                <p className="mb-4">Established in <strong>1963</strong>, our institute is ranked among the top technical institutions.</p>
                <p className="mb-4">We offer <strong>state-of-the-art labs</strong>, world-class faculty, and a strong alumni network.</p>
                <p className="mb-4">Our Training & Placement Cell bridges the gap between academia and industry.</p>
                <p className="font-semibold text-blue-400 mt-4">Join us in shaping the future!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Slider Section */}
        <header className="text-center py-10">
          <h1 className="text-4xl font-bold">Some Best Offers</h1>
        </header>

        <div className="h-96 flex items-center justify-center">

          <ResultSlider student={result_for_profile} />

        </div>



        {/* Top Recruiters Section */}
        {/* to insert silder of top company like github color theme is to be decided */}


        {/* Success Stories Section */}
        <section className="mt-10 bg-gray-800 py-20 px-40">
          <h2 className="text-2xl font-bold text-center text-white">Alumni Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {["John Doe", "Jane Smith", "Chris Johnson"].map((name, index) => (
              <div key={index} className="bg-gray-900 shadow-lg rounded-lg p-6">
                <p className="text-gray-300">"This portal helped me achieve my dream career!"</p>
                <strong className="block mt-4 text-white">- {name}</strong>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>
          &copy; 2025 Placement Portal. All Rights Reserved. {" "}
          <a href="/TP_Cell_Guidelines.pdf" target='_blank' rel='noopener noreferrer' className="text-blue-400 hover:underline">TNP Guidelines</a> | {" "}
          <a href="/contact-us" className="text-blue-400 hover:underline">Contact Us</a> | {" "}
          <a href="/about" className="text-blue-400 hover:underline">About Us</a>
        </p>
      </footer>
    </div>
  );
}

export default Home;

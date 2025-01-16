import React from "react";
import image1 from "./image1.jpg";

const About = () => {
  const profiles = [
    {
      name: "Sameer Singh",
      email: "sameerkhobra474@gmail.com",
      image: image1,
    },
    {
      name: "Sameer",
      email: "12213055@nitkkr.ac.in",
      image: image1,
    },
    {
      name: "Harshit Anand",
      email: "12213053@nitkkr.ac.in",
      image: image1,
    },
  ];

  return (
    <>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-6 text-center">
        <h1 className="text-3xl font-bold tracking-wide">
          About Us
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="bg-gray-100 p-8 min-h-screen flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out"
            >
              {/* Image with Glow Effect */}
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg mb-4 transform group-hover:rotate-6 transition duration-500 ease-in-out group-hover:shadow-2xl group-hover:shadow-pink-500">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="text-center">
                <h2 className="text-lg font-semibold text-gray-800 mb-2 transition group-hover:text-pink-500">
                  {profile.name}
                </h2>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-indigo-600 hover:text-indigo-800 underline transition duration-300"
                >
                  {profile.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;

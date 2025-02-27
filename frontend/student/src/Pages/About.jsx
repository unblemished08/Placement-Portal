import React from "react";
import Typing from "react-typing-effect";

const teamMembers = [
  { name: "Harshit", image: "/images/Harshit.jpg" },
  { name: "Sameer Meel", image: "/images/Sameer.jpg" },
  { name: "Sameer", image: "/images/profle.jpg" },
  { name: "Richa", image: "/images/Richa.jpg" },
];

const About = () => {
  return (
    <div className="bg-gray-900 text-black min-h-screen flex flex-col items-center p-8">
      <h3 className="text-lg uppercase tracking-widest text-gray-100 animate-fadeInUp">
        A Bit About Us
      </h3>
      <h1 className="text-4xl font-bold text-gray-100 mt-2">
        <Typing text={["Who We Are ?", "We Are Team Pseudo Coders !", "Welcome to Our World !"]} speed={100} eraseSpeed={50} />
      </h1>
      
      {/* Profile Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-60 h-60 border-4 border-gray-500 rounded-full overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-bold text-gray-100 mt-2">{member.name}</h3>
          </div>
        ))}
      </div>
      
      <p className="text-center text-gray-500 mt-6 max-w-xl text-lg leading-relaxed animate-fadeIn">
  Hi, we are <span className="font-semibold text-blue-500">Pseudo Coders</span>. A team of passionate problem solvers, tech enthusiasts, and code warriors, always striving for innovation and excellence in the world of programming.
</p>

      <p className="text-gray-500 mt-2 text-sm animate-fadeIn">
        Image by <a href="#" className="text-blue-500 hover:underline">Freepik</a>
      </p>
      
      {/* Updated service cards with original blue shadow */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
        {[
          { title: "Graphic Design", icon: "✏️" },
          { title: "Web Design", icon: "🖥" },
          { title: "Software", icon: "💻" },
          { title: "Application", icon: "📱" }
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-2xl p-6 shadow-md text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500"
          >
            <div className="text-4xl text-gray-700">{item.icon}</div>
            <h3 className="font-semibold mt-2 text-gray-800">{item.title}</h3>
            <a href="#" className="text-blue-500 mt-2 inline-block hover:underline">MORE</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
import React from "react";

const About=()=>{
  return (
    <div className="bg-gray-100 text-black min-h-screen flex flex-col items-center p-8">
      <h3 className="text-lg uppercase tracking-widest text-gray-600">A Bit About Us</h3>
      <h1 className="text-4xl font-bold text-gray-900 mt-2">Who We Are?</h1>
      
      <div className="flex gap-28">
          <div className="mt-6 border-4 border-gray-500 rounded-full overflow-hidden w-60 h-60 hover:shadow-lg hover:shadow-blue-500 transition duration-300">
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-6 border-4 border-gray-500 rounded-full overflow-hidden w-60 h-60 hover:shadow-lg hover:shadow-blue-500 transition duration-300">
            <img
              src="/images/ran.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-6 border-4 border-gray-500 rounded-full overflow-hidden w-60 h-60 hover:shadow-lg hover:shadow-blue-500 transition duration-300">
            <img
              src="/images/sid.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        
      </div>
      
      <p className="text-center text-gray-700 mt-4 max-w-lg">
        Hi, We are Team Pink. We love pink Color, our motto is to spread this color to all over the world
        and make the universe all pink
      </p>
      
      <p className="text-gray-500 mt-2">Image by <a href="#" className="text-blue-500">Freepik</a></p>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        {[
          { title: "Graphic Design", icon: "✏️" },
          { title: "Web Design", icon: "🖥" },
          { title: "Software", icon: "💻" },
          { title: "Application", icon: "📱" }
        ].map((item, index) => (
          <div key={index} className="bg-white text-black rounded-2xl p-6 shadow-lg text-center">
            <div className="text-4xl text-gray-700">{item.icon}</div>
            <h3 className="font-semibold mt-2">{item.title}</h3>
            <a href="#" className="text-blue-500 mt-2 inline-block">MORE</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
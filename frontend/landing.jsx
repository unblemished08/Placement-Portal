import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <div className="flex items-center text-center gap-4 mb-6">
        <motion.img
          src="./logo.png"
          alt="Home Logo"
          className="rounded-2xl shadow-lg w-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.h1 
          className="text-4xl font-bold text-gray-100"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to the Portal
        </motion.h1>
      </div>
      <motion.p
        className="text-gray-400 text-lg mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Select your login type below
      </motion.p>
      <div className="mt-6 flex gap-6 flex-wrap justify-center">
        {["Student", "Company", "Admin", "Coordinator"].map((role) => (
          <motion.div
            key={role}
            className="flex flex-col items-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <a href={`/${role.toLowerCase()}`}>
              <div className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg shadow-lg hover:from-blue-600 hover:to-purple-600">
                {role}
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

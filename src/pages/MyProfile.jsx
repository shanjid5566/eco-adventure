import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AuthContext } from "../provider/ContextProvider";
import DynamicTitle from "../components/DynamicTitle/DynamicTitle";

export default function MyProfile() {
  DynamicTitle("Eco-Adventure | MyProfile")
    const {user} = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center p-6 gap-6">
      {/* Welcome Title */}
      <motion.h1
        className="text-3xl font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome, {user?.displayName || "User"}
      </motion.h1>

      {/* Profile div */}
      <div className="w-full max-w-md shadow-lg rounded-2xl">
        <div className="flex flex-col items-center p-6 gap-4">
          <img
            src={user?.photoURL}
            alt="Profile"
            className="w-28 h-28 rounded-full shadow-md object-cover"
          />
          <div className="text-center space-y-2">
            <h2 className="text-xl font-semibold">Name : {user?.displayName}</h2>
            <p className="text-gray-600">Email : {user?.email}</p>
          </div>
          <div
            className="mt-4 w-full rounded-lg bg-green-300 py-2 px-4 text-center hover:cursor-pointer"
            onClick={() => navigate("/update-profile")}
          >
            Update Profile
          </div>
        </div>
      </div>
    </div>
  );
}

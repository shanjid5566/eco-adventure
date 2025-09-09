import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { AuthContext } from "../provider/ContextProvider";
import { useNavigate } from "react-router";
import DynamicTitle from "../components/DynamicTitle/DynamicTitle";

const UpdateProfile = () => {
  DynamicTitle("Eco-Adventure | Update Profile")
  const { updateProfileName } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value; 
    updateProfileName(name, photo)
      .then(() => {
        // Profile updated!
        navigate("/")
        // ...
      })
      .catch((error) => {
        // ...
      });
  };
  return (
    <div className=" flex items-start justify-center p-10">
      <div className="bg-white rounded-2xl shadow-xl flex justify-center items-centerw-3xl max-w-2xl overflow-hidden">
        {/* Right Side - Login Form */}
        <div className="w-full p-10 text-center">
          <h2 className="text-2xl font-bold mb-2">Update Profile</h2>

          <form onSubmit={handleUpdateProfile}>
            {/* Username Input */}
            <div className="flex items-center border rounded-lg px-3 py-2 mb-4 bg-gray-100">
              <FaUser className="text-gray-500  mr-2" />
              <input
                type="text"
                name="name"
                placeholder="User Name"
                className="bg-transparent outline-none flex-1 text-sm"
              />
            </div>
            {/* PhotoUrl Input */}
            <div className="flex items-center border rounded-lg px-3 py-2 mb-4 bg-gray-100">
              <IoMdPhotos className="text-gray-500  mr-2" />
              <input
                type="text"
                name="photo"
                placeholder="Photo Url"
                className="bg-transparent outline-none flex-1 text-sm"
              />
            </div>

            {/* Sign In Button */}
            <button className="w-full bg-blue-800 text-white py-2 rounded-lg font-semibold mb-4 hover:bg-blue-900 transition">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;

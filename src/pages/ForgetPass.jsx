import { useContext } from "react";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router";
import { AuthContext } from "../provider/ContextProvider";
import DynamicTitle from "../components/DynamicTitle/DynamicTitle";

const ForgetPass = () => {
  DynamicTitle("Eco-Adventure | Forgate Password")
  const navigate = useNavigate();
  const { forgetPassword, showPassword, setShowPassword } =
    useContext(AuthContext);
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const check = e.target.checkpassword.value;
    if (password === check) {
      forgetPassword(password)
        .then(() => {
          // Password reset email sent!
          navigate("/")
          // ..
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
  };

  return (
    <div className=" flex items-start justify-center p-10">
      <div className="bg-white rounded-2xl shadow-xl flex justify-center items-centerw-3xl max-w-2xl overflow-hidden">
        {/* Right Side - Login Form */}
        <div className="w-full p-10 text-center">
          <h2 className="text-2xl font-bold mb-2">Update Profile</h2>

          <form onSubmit={handleUpdateProfile}>
            {/* Username Input */}
            <div className="flex items-center border rounded-lg px-3 py-2 mb-2 bg-gray-100">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="bg-transparent outline-none flex-1 text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-sm text-blue-600 font-semibold"
              >
                {showPassword ? "HIDE" : "SHOW"}
              </button>
            </div>
            <div className="flex items-center border rounded-lg px-3 py-2 mb-2 bg-gray-100">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type={showPassword ? "text" : "password"}
                name="checkpassword"
                placeholder="check Password"
                className="bg-transparent outline-none flex-1 text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-sm text-blue-600 font-semibold"
              >
                {showPassword ? "HIDE" : "SHOW"}
              </button>
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

export default ForgetPass;

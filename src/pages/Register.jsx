import { FaLock, FaUser, FaGoogle } from "react-icons/fa";
import { IoMdMail, IoMdPhotos } from "react-icons/io";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/ContextProvider";
import { useContext, useState } from "react";
import DynamicTitle from "../components/DynamicTitle/DynamicTitle";

const Register = () => {
  DynamicTitle("Eco-Adventure | Registation")
  const [errorMessage, setErrorMessage] = useState("");
  const {
    createUser,
    setUser,
    updateProfileName,
    showPassword,
    setShowPassword,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSingUp = (e) => {
    e.preventDefault();
    const checkbox = e.target.checkbox.checked;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!checkbox) {
      setErrorMessage("You must agree to the terms and conditions");
      return;
    }
    if (password.length < 6) {
      setErrorMessage(
        "Must have an Uppercase , Lowercase and at least 6 characters"
      );
      return;
    }
    createUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        setUser(user);
        navigate("/");
        updateProfileName(name, photo)
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            setErrorMessage(error.message);
            // ...
          });

        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        // ..
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 p-6">
      <div className="bg-white rounded-2xl shadow-xl flex w-full max-w-4xl overflow-hidden">
        {/* Left Side - Welcome Section */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-b from-blue-600 to-blue-800 text-white p-10 relative">
          <h2 className="text-3xl font-bold mb-2">Hello</h2>
          <h3 className="text-lg mb-4">this is Travel Fun</h3>
          <p className="text-sm text-gray-200 max-w-sm text-center">
            Register to be a member and enjoy all features.
          </p>

          {/* Decorative Circles */}
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500 rounded-full opacity-70"></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-400 rounded-full opacity-80"></div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-2xl font-bold mb-2">Register</h2>

          <form onSubmit={handleSingUp}>
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

            {/* Email Input */}
            <div className="flex items-center border rounded-lg px-3 py-2 mb-4 bg-gray-100">
              <IoMdMail className="text-gray-500  mr-2" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="bg-transparent outline-none flex-1 text-sm"
              />
            </div>

            {/* Password Input */}
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

            {/* Remember Me + Forgot Password */}
            <div className="flex items-center justify-between mb-6 text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" name="checkbox" />
                terms and conditions
              </label>
            </div>
            {errorMessage && (
              <p className="text-red-600 mb-4">{errorMessage}</p>
            )}
            {/* Sign In Button */}
            <button className="w-full bg-blue-800 text-white py-2 rounded-lg font-semibold mb-4 hover:bg-blue-900 transition">
              Sign Up
            </button>

            {/* Divider */}
            <div className="flex items-center mb-4">
              <hr className="flex-1 border-gray-300" />
              <span className="px-2 text-sm text-gray-500">Or</span>
              <hr className="flex-1 border-gray-300" />
            </div>
          </form>

          {/* Sign in with Other */}
          <button className="flex gap-3 justify-center items-center w-full border border-gray-400 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition">
            <FaGoogle /> Sign Up with Google
          </button>

          {/* Sign Up */}
          <p className="text-sm text-center mt-6 text-gray-500">
            Already have an account?{" "}
            <Link
              to={"/auth/login"}
              href="#"
              className="text-blue-600 font-semibold"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

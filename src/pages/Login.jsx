import { FaLock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/ContextProvider";
import { useContext } from "react";
import DynamicTitle from "../components/DynamicTitle/DynamicTitle";

const Login = () => {
  DynamicTitle("Eco-Adventure | Login")
  const { loginUser, setUser,  showPassword, setShowPassword } = useContext(AuthContext);
  
  const navigate = useNavigate();

  const handleSingIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user)
        console.log(user)
        navigate("/")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 p-6">
      <div className="bg-white rounded-2xl shadow-xl flex w-full max-w-4xl overflow-hidden">
        {/* Left Side - Welcome Section */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-b from-blue-600 to-blue-800 text-white p-10 relative">
          <h2 className="text-3xl font-bold mb-2">WELCOME</h2>
          <h3 className="text-lg mb-4">to Travel Fun</h3>
          <p className="text-sm text-gray-200 max-w-sm text-center">
            Login to enjoy all features.
          </p>

          {/* Decorative Circles */}
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500 rounded-full opacity-70"></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-400 rounded-full opacity-80"></div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-2xl font-bold mb-2">Sign in</h2>

          <form onSubmit={handleSingIn}>
            {/* Username Input */}
            <div className="flex items-center border rounded-lg px-3 py-2 mb-4 bg-gray-100">
              <IoMdMail className="text-gray-500  mr-2" />
              <input
                type="text"
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
                <input type="checkbox" name='checkbox'className="mr-2" />
                Remember me
              </label>
              <Link to={'/auth/login/forgetPass'} className="text-blue-600">
                Forgot Password?
              </Link>
            </div>

            {/* Sign In Button */}
            <button className="w-full bg-blue-800 text-white py-2 rounded-lg font-semibold mb-4 hover:bg-blue-900 transition">
              Sign in
            </button>

            {/* Divider */}
            <div className="flex items-center mb-4">
              <hr className="flex-1 border-gray-300" />
              <span className="px-2 text-sm text-gray-500">Or</span>
              <hr className="flex-1 border-gray-300" />
            </div>
          </form>

          {/* Sign in with Other */}
          <button className="w-full border border-gray-400 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition">
            Sign in with other
          </button>

          {/* Sign Up */}
          <p className="text-sm text-center mt-6 text-gray-500">
            Already have an account?{" "}
            <Link
              to={"/auth/register"}
              href="#"
              className="text-blue-600 font-semibold"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
